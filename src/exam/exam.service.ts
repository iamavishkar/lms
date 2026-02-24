import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Exam } from './exam.entity';

@Injectable()
export class ExamService extends TypeOrmCrudService<Exam> {
  constructor(@InjectRepository(Exam) repo: Repository<Exam>) {
    super(repo);
  }
}
