import { Controller } from '@nestjs/common';
import { Crud } from '@dataui/crud';
import { Result } from './result.entity';
import { ResultDto } from './result.dto';
import { ResultService } from './result.service';

@Crud({
  model: { type: Result },
  dto: { create: ResultDto, update: ResultDto },
})
@Controller('results')
export class ResultController {
  constructor(public service: ResultService) {}
}
