import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { Student } from '../student/entities/student.entity';
import { Teacher } from '../teacher/entities/teacher.entity';
import { Class } from '../class/entities/class.entity';
import { Attendance } from '../attendance/entities/attendance.entity';
import { Exam } from '../exam/entities/exam.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student, Teacher, Class, Attendance, Exam])],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
