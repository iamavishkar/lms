import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParentStudentRelation } from './parent-student.entity';
import { ParentStudentService } from './parent-student.service';
import { ParentStudentController } from './parent-student.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ParentStudentRelation])],
  controllers: [ParentStudentController],
  providers: [ParentStudentService],
  exports: [ParentStudentService],
})
export class ParentStudentModule {}
