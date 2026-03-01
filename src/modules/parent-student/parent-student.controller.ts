import { Controller } from '@nestjs/common';
import { Crud } from '@dataui/crud';
import { ParentStudentRelation } from './parent-student.entity';
import { ParentStudentDto } from './parent-student.dto';
import { ParentStudentService } from './parent-student.service';

@Crud({
  model: { type: ParentStudentRelation },
  dto: { create: ParentStudentDto, update: ParentStudentDto },
})
@Controller('parent-student')
export class ParentStudentController {
  constructor(public service: ParentStudentService) {}
}
