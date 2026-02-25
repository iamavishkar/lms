import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    return next.handle().pipe(
      map((res: unknown) => this.responseHandler(res, context)),
      catchError((err: HttpException) =>
        throwError(() => this.errorHandler(err, context)),
      ),
    );
  }

  errorHandler(exception, context: ExecutionContext) {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    let errorResponse = {};
    if (exception instanceof HttpException) {
      errorResponse = exception?.getResponse() as Record<string, any> | string;
    } else {
      errorResponse = { message: exception.toString() };
    }

    let errorMessage = 'Bad Request';
    if (status === HttpStatus.INTERNAL_SERVER_ERROR) {
      errorMessage = 'Internal Server Error';
    }

    let errors;
    if (typeof errorResponse === 'string') {
      errors = { message: errorResponse };
    } else if (typeof errorResponse === 'object') {
      errors = {};
      Object.keys(errorResponse).forEach((key) => {
        const fieldErrors = errorResponse[key];
        if (Array.isArray(fieldErrors)) {
          fieldErrors.forEach((message: string) => {
            errors[key] = message;
          });
        } else {
          if (key == 'message') {
            errors[key] = fieldErrors;
          }
          if (key == 'error') {
            errorMessage = fieldErrors;
          }
        }
      });
    } else {
      errors = { message: 'Something went wrong' };
    }

    response.status(status).json({
      status: false,
      statusCode: status,
      message: errorMessage,
      error: errors,
    });
  }

  responseHandler(res: any, context: ExecutionContext) {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const statusCode = response.statusCode;

    /*
     * For paginated response.
     * Check if the response is a tuple of [data, count]
     */
    if (Array.isArray(res) && res.length === 2 && typeof res[1] === 'number') {
      const [data, count] = res;

      const page = parseInt(request.query.page, 10) || 1; // Default to page 1
      const limit = parseInt(request.query.limit, 10) || 10; // Default to limit 10
      const total_pages = Math.ceil(count / limit);

      return {
        status: true,
        statusCode,
        message: 'Request successful',
        data, // The paginated data
        pagination: {
          total_items: count,
          total_pages,
          current_page: page,
          page_size: limit,
        },
      };
    }

    if (res && typeof res === 'object' && res.data && res.pagination) {
      return {
        status: true,
        statusCode,
        message: 'Request successful',
        data: res.data,
        pagination: res.pagination,
      };
    }

    const dataWithoutMessage =
      Array.isArray(res) || typeof res === 'object' ? res : {};
    return {
      status: true,
      statusCode,
      message: res?.message || 'Request successful',
      data: dataWithoutMessage,
    };
  }
}
