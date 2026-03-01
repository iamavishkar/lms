import { Controller } from '@nestjs/common';
import { Crud } from '@dataui/crud';
import { StudentEnrollment } from './enrollment.entity';
import { EnrollmentDto } from './enrollment.dto';
import { EnrollmentService } from './enrollment.service';

@Crud({
  model: { type: StudentEnrollment },
  dto: { create: EnrollmentDto, update: EnrollmentDto },
})
@Controller('enrollments')
export class EnrollmentController {
  constructor(public service: EnrollmentService) {}
}
