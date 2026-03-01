import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from './teacher.entity';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { Subject } from '../subject/subject.entity';
import { Class } from '../class/class.entity';
import { Attendance } from '../attendance/attendance.entity';
import { StudentEnrollment } from '../enrollment/enrollment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Teacher, Subject, Class, Attendance, StudentEnrollment]),
  ],
  controllers: [TeacherController],
  providers: [TeacherService],
  exports: [TeacherService],
})
export class TeacherModule {}
