import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Subject } from "../subject/subject.entity";
import { SubjectService } from "../subject/subject.service";
import { SubjectController } from "../subject/subject.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Subject])],
  controllers: [SubjectController],
  providers: [SubjectService],
  exports: [SubjectService],
})
export class SubjectModule {}
