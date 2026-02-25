import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Attendance } from "../attendance/attendance.entity";
import { AttendanceService } from "../attendance/attendance.service";
import { AttendanceController } from "../attendance/attendance.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Attendance])],
  controllers: [AttendanceController],
  providers: [AttendanceService],
  exports: [AttendanceService],
})
export class AttendanceModule {}
