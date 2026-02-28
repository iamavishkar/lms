import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Subject } from './subject.entity';

@Injectable()
export class SubjectService extends TypeOrmCrudService<Subject> {
  constructor(@InjectRepository(Subject) repo: Repository<Subject>) {
    super(repo);
  }
}
