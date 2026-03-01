import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoordinatorController } from './coordinator.controller';
import { CoordinatorService } from './coordinator.service';
import { Term } from '../term/term.entity';
import { StudentEnrollment } from '../enrollment/enrollment.entity';
import { Subject } from '../subject/subject.entity';
import { Student } from '../student/student.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Term, StudentEnrollment, Subject, Student]),
  ],
  controllers: [CoordinatorController],
  providers: [CoordinatorService],
})
export class CoordinatorModule {}
