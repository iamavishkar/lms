import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentService extends TypeOrmCrudService<Student> {
  constructor(@InjectRepository(Student) repo: Repository<Student>) {
    super(repo);
  }
}
