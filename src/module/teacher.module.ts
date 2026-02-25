import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Teacher } from "../teacher/teacher.entity";
import { TeacherService } from "../teacher/teacher.service";
import { TeacherController } from "../teacher/teacher.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Teacher])],
  controllers: [TeacherController],
  providers: [TeacherService],
  exports: [TeacherService],
})
export class TeacherModule {}
