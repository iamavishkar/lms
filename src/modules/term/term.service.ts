import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Term } from './term.entity';

@Injectable()
export class TermService extends TypeOrmCrudService<Term> {
  constructor(@InjectRepository(Term) repo: Repository<Term>) {
    super(repo);
  }

  async getActiveTerms(): Promise<Term[]> {
    return this.repo.find({ where: { isActive: true } });
  }
}
