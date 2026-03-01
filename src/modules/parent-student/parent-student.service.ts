import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { ParentStudentRelation } from './parent-student.entity';

@Injectable()
export class ParentStudentService extends TypeOrmCrudService<ParentStudentRelation> {
  constructor(
    @InjectRepository(ParentStudentRelation)
    repo: Repository<ParentStudentRelation>,
  ) {
    super(repo);
  }

  async getChildrenByParentId(
    parentId: number,
  ): Promise<ParentStudentRelation[]> {
    return this.repo.find({ where: { parentId } });
  }

  async getParentsByStudentId(
    studentId: number,
  ): Promise<ParentStudentRelation[]> {
    return this.repo.find({ where: { studentId } });
  }
}
