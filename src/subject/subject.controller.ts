import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { Subject } from './subject.entity';
import { SubjectDto } from './subject.dto';
import { SubjectService } from './subject.service';

@Crud({
  model: { type: Subject },
  dto: { create: SubjectDto, update: SubjectDto },
})
@UseGuards(JwtAuthGuard)
@Controller('subjects')
export class SubjectController implements CrudController<Subject> {
  constructor(public service: SubjectService) {}
}
