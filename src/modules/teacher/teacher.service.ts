import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Teacher } from './teacher.entity';

@Injectable()
export class TeacherService extends TypeOrmCrudService<Teacher> {
  constructor(@InjectRepository(Teacher) repo: Repository<Teacher>) {
    super(repo);
  }
}
