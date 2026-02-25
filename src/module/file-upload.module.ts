import { Module } from "@nestjs/common";
import { FileUploadService } from "../file-upload/file-upload.service";
import { FileUploadController } from "../file-upload/file-upload.controller";

@Module({
  controllers: [FileUploadController],
  providers: [FileUploadService],
  exports: [FileUploadService],
})
export class FileUploadModule {}
