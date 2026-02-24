import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { Result } from './result.entity';
import { ResultDto } from './result.dto';
import { ResultService } from './result.service';

@Crud({
  model: { type: Result },
  dto: { create: ResultDto, update: ResultDto },
})
@UseGuards(JwtAuthGuard)
@Controller('results')
export class ResultController implements CrudController<Result> {
  constructor(public service: ResultService) {}
}
