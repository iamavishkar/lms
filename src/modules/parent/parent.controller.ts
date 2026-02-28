import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Parent } from './parent.entity';
import { ParentDto } from './parent.dto';
import { ParentService } from './parent.service';

@Crud({
  model: { type: Parent },
  dto: { create: ParentDto, update: ParentDto },
})
@Controller('parents')
export class ParentController {
  constructor(public service: ParentService) {}
}
