import { Controller } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { Attendance } from "./attendance.entity";
import { AttendanceDto } from "./attendance.dto";
import { AttendanceService } from "./attendance.service";

@Crud({
  model: { type: Attendance },
  dto: { create: AttendanceDto, update: AttendanceDto },
})
@Controller("attendance")
export class AttendanceController {
  constructor(public service: AttendanceService) {}
}
