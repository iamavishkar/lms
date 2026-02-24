import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Parent } from './parent.entity';

@Injectable()
export class ParentService extends TypeOrmCrudService<Parent> {
  constructor(@InjectRepository(Parent) repo: Repository<Parent>) {
    super(repo);
  }
}
