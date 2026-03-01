import { Controller } from '@nestjs/common';
import { Crud } from '@dataui/crud';
import { Term } from './term.entity';
import { TermDto } from './term.dto';
import { TermService } from './term.service';

@Crud({
  model: { type: Term },
  dto: { create: TermDto, update: TermDto },
})
@Controller('terms')
export class TermController {
  constructor(public service: TermService) {}
}
