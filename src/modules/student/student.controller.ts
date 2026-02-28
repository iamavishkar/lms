import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Student } from './student.entity';
import { StudentDto } from './student.dto';
import { StudentService } from './student.service';

@Crud({
  model: { type: Student },
  dto: { create: StudentDto, update: StudentDto },
})
@Controller('students')
export class StudentController {
  constructor(public service: StudentService) {}
}
