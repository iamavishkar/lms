import { Injectable } from '@nestjs/common';

const ALLOWED_MIME_TYPES = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

@Injectable()
export class FileUploadService {
  getFileUrl(filename: string): string {
    return `/uploads/${filename}`;
  }

  validateFile(file: Express.Multer.File): boolean {
    return ALLOWED_MIME_TYPES.includes(file.mimetype);
  }
}
