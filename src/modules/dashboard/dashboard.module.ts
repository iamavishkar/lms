import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { Student } from '../student/student.entity';
import { Teacher } from '../teacher/teacher.entity';
import { Class } from '../class/class.entity';
import { Attendance } from '../attendance/attendance.entity';
import { Exam } from '../exam/exam.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Student, Teacher, Class, Attendance, Exam]),
  ],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
