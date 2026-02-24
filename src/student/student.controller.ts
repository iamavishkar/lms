import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { Student } from './student.entity';
import { StudentDto } from './student.dto';
import { StudentService } from './student.service';

@Crud({
  model: { type: Student },
  dto: { create: StudentDto, update: StudentDto },
  query: { join: { user: { eager: true } } },
})
@UseGuards(JwtAuthGuard)
@Controller('students')
export class StudentController implements CrudController<Student> {
  constructor(public service: StudentService) {}
}
