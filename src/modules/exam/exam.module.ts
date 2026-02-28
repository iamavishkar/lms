import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exam } from './exam.entity';
import { ExamService } from './exam.service';
import { ExamController } from './exam.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Exam])],
  controllers: [ExamController],
  providers: [ExamService],
  exports: [ExamService],
})
export class ExamModule {}
