import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { Exam } from './exam.entity';
import { ExamDto } from './exam.dto';
import { ExamService } from './exam.service';

@Crud({
  model: { type: Exam },
  dto: { create: ExamDto, update: ExamDto },
})
@UseGuards(JwtAuthGuard)
@Controller('exams')
export class ExamController implements CrudController<Exam> {
  constructor(public service: ExamService) {}
}
