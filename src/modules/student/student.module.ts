import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { StudentEnrollment } from '../enrollment/enrollment.entity';
import { Attendance } from '../attendance/attendance.entity';
import { Result } from '../result/result.entity';
import { Exam } from '../exam/exam.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Student, StudentEnrollment, Attendance, Result, Exam]),
  ],
  controllers: [StudentController],
  providers: [StudentService],
  exports: [StudentService],
})
export class StudentModule {}
