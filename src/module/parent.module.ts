import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Parent } from "../parent/parent.entity";
import { ParentService } from "../parent/parent.service";
import { ParentController } from "../parent/parent.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Parent])],
  controllers: [ParentController],
  providers: [ParentService],
  exports: [ParentService],
})
export class ParentModule {}
