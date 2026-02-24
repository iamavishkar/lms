import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { Parent } from './parent.entity';
import { ParentDto } from './parent.dto';
import { ParentService } from './parent.service';

@Crud({
  model: { type: Parent },
  dto: { create: ParentDto, update: ParentDto },
  query: { join: { user: { eager: true } } },
})
@UseGuards(JwtAuthGuard)
@Controller('parents')
export class ParentController implements CrudController<Parent> {
  constructor(public service: ParentService) {}
}
