import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { Class } from './class.entity';
import { ClassDto } from './class.dto';
import { ClassService } from './class.service';

@Crud({
  model: { type: Class },
  dto: { create: ClassDto, update: ClassDto },
})
@UseGuards(JwtAuthGuard)
@Controller('classes')
export class ClassController implements CrudController<Class> {
  constructor(public service: ClassService) {}
}
