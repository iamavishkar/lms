import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Result } from './entities/result.entity';
import { CreateResultDto } from './dto/create-result.dto';
import { UpdateResultDto } from './dto/update-result.dto';

@Injectable()
export class ResultService {
  constructor(
    @InjectRepository(Result)
    private resultRepository: Repository<Result>,
  ) {}

  async create(createResultDto: CreateResultDto): Promise<Result> {
    const result = this.resultRepository.create(createResultDto);
    return this.resultRepository.save(result);
  }

  async findAll(): Promise<Result[]> {
    return this.resultRepository.find();
  }

  async findOne(id: number): Promise<Result> {
    const result = await this.resultRepository.findOne({ where: { id } });
    if (!result) {
      throw new NotFoundException(`Result #${id} not found`);
    }
    return result;
  }

  async findByStudent(studentId: number): Promise<Result[]> {
    return this.resultRepository.find({ where: { studentId } });
  }

  async update(id: number, updateResultDto: UpdateResultDto): Promise<Result> {
    await this.findOne(id);
    await this.resultRepository.update(id, updateResultDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.findOne(id);
    await this.resultRepository.remove(result);
  }
}
