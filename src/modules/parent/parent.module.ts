import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parent } from './parent.entity';
import { ParentService } from './parent.service';
import { ParentController } from './parent.controller';
import { ParentStudentRelation } from '../parent-student/parent-student.entity';
import { Attendance } from '../attendance/attendance.entity';
import { Result } from '../result/result.entity';
import { StudentEnrollment } from '../enrollment/enrollment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Parent, ParentStudentRelation, Attendance, Result, StudentEnrollment]),
  ],
  controllers: [ParentController],
  providers: [ParentService],
  exports: [ParentService],
})
export class ParentModule {}
