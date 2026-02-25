import { Controller } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { Exam } from "./exam.entity";
import { ExamDto } from "./exam.dto";
import { ExamService } from "./exam.service";

@Crud({
  model: { type: Exam },
  dto: { create: ExamDto, update: ExamDto },
})
@Controller("exams")
export class ExamController {
  constructor(public service: ExamService) {}
}
