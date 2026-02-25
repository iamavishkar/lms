import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Class } from "../class/class.entity";
import { ClassService } from "../class/class.service";
import { ClassController } from "../class/class.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Class])],
  controllers: [ClassController],
  providers: [ClassService],
  exports: [ClassService],
})
export class ClassModule {}
