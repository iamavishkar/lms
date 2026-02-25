import { Controller } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { Teacher } from "./teacher.entity";
import { TeacherDto } from "./teacher.dto";
import { TeacherService } from "./teacher.service";

@Crud({
  model: { type: Teacher },
  dto: { create: TeacherDto, update: TeacherDto },
})
@Controller("teachers")
export class TeacherController {
  constructor(public service: TeacherService) {}
}
