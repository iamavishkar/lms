import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Subject } from './subject.entity';
import { SubjectDto } from './subject.dto';
import { SubjectService } from './subject.service';

@Crud({
  model: { type: Subject },
  dto: { create: SubjectDto, update: SubjectDto },
})
@Controller('subjects')
export class SubjectController {
  constructor(public service: SubjectService) {}
}
