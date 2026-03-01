import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { CoordinatorService } from './coordinator.service';
import {
  CreateTermDto,
  EnrollmentDto,
  BulkEnrollmentDto,
  PromoteStudentDto,
  AssignTeacherDto,
} from './coordinator.dto';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';

@UseGuards(RolesGuard)
@Roles('coordinator', 'admin')
@Controller('coordinator')
export class CoordinatorController {
  constructor(private readonly coordinatorService: CoordinatorService) {}

  @Post('terms')
  async createTerm(@Body() dto: CreateTermDto) {
    return this.coordinatorService.createTerm(dto);
  }

  @Get('terms')
  async getTerms() {
    return this.coordinatorService.getTerms();
  }

  @Post('enrollments')
  async enrollStudent(@Body() dto: EnrollmentDto) {
    return this.coordinatorService.enrollStudent(
      dto.studentId,
      dto.subjectId,
      dto.termId,
      dto.classId,
    );
  }

  @Post('enrollments/bulk')
  async bulkEnrollStudents(@Body() dto: BulkEnrollmentDto) {
    return this.coordinatorService.bulkEnroll(
      dto.studentIds,
      dto.subjectId,
      dto.termId,
      dto.classId,
    );
  }

  @Post('students/:studentId/promote')
  async promoteStudent(
    @Param('studentId') studentId: string,
    @Body() dto: PromoteStudentDto,
  ) {
    return this.coordinatorService.promoteStudent(
      parseInt(studentId),
      dto.newClassId,
      dto.termId,
    );
  }

  @Post('courses/:courseId/assign-teacher')
  async assignTeacher(
    @Param('courseId') courseId: string,
    @Body() dto: AssignTeacherDto,
  ) {
    return this.coordinatorService.assignTeacher(
      parseInt(courseId),
      dto.teacherId,
    );
  }

  @Get('analytics')
  async getAnalytics() {
    return this.coordinatorService.getAnalytics();
  }
}
