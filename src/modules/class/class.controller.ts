import { Controller } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { Class } from "./class.entity";
import { ClassDto } from "./class.dto";
import { ClassService } from "./class.service";

@Crud({
  model: { type: Class },
  dto: { create: ClassDto, update: ClassDto },
})
@Controller("classes")
export class ClassController {
  constructor(public service: ClassService) {}
}
