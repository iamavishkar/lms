import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Student } from "../student/student.entity";
import { StudentService } from "../student/student.service";
import { StudentController } from "../student/student.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  controllers: [StudentController],
  providers: [StudentService],
  exports: [StudentService],
})
export class StudentModule {}
