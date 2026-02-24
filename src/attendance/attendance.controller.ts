import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { Attendance } from './attendance.entity';
import { AttendanceDto } from './attendance.dto';
import { AttendanceService } from './attendance.service';

@Crud({
  model: { type: Attendance },
  dto: { create: AttendanceDto, update: AttendanceDto },
})
@UseGuards(JwtAuthGuard)
@Controller('attendance')
export class AttendanceController implements CrudController<Attendance> {
  constructor(public service: AttendanceService) {}
}
