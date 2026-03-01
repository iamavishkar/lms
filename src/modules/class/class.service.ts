import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Class } from './class.entity';

@Injectable()
export class ClassService extends TypeOrmCrudService<Class> {
  constructor(@InjectRepository(Class) repo: Repository<Class>) {
    super(repo);
  }
}
