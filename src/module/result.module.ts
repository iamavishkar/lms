import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Result } from "../result/result.entity";
import { ResultService } from "../result/result.service";
import { ResultController } from "../result/result.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Result])],
  controllers: [ResultController],
  providers: [ResultService],
  exports: [ResultService],
})
export class ResultModule {}
