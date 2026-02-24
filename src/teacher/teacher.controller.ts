import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { Teacher } from './teacher.entity';
import { TeacherDto } from './teacher.dto';
import { TeacherService } from './teacher.service';

@Crud({
  model: { type: Teacher },
  dto: { create: TeacherDto, update: TeacherDto },
  query: { join: { user: { eager: true } } },
})
@UseGuards(JwtAuthGuard)
@Controller('teachers')
export class TeacherController implements CrudController<Teacher> {
  constructor(public service: TeacherService) {}
}
