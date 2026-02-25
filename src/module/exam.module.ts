import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Exam } from "../exam/exam.entity";
import { ExamService } from "../exam/exam.service";
import { ExamController } from "../exam/exam.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Exam])],
  controllers: [ExamController],
  providers: [ExamService],
  exports: [ExamService],
})
export class ExamModule {}
