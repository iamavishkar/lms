import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Parent } from './entities/parent.entity';
import { CreateParentDto } from './dto/create-parent.dto';
import { UpdateParentDto } from './dto/update-parent.dto';

@Injectable()
export class ParentService {
  constructor(
    @InjectRepository(Parent)
    private parentRepository: Repository<Parent>,
  ) {}

  async create(createParentDto: CreateParentDto): Promise<Parent> {
    const parent = this.parentRepository.create(createParentDto);
    return this.parentRepository.save(parent);
  }

  async findAll(): Promise<Parent[]> {
    return this.parentRepository.find({ relations: ['user'] });
  }

  async findOne(id: number): Promise<Parent> {
    const parent = await this.parentRepository.findOne({ where: { id }, relations: ['user'] });
    if (!parent) {
      throw new NotFoundException(`Parent #${id} not found`);
    }
    return parent;
  }

  async update(id: number, updateParentDto: UpdateParentDto): Promise<Parent> {
    await this.findOne(id);
    await this.parentRepository.update(id, updateParentDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const parent = await this.findOne(id);
    await this.parentRepository.remove(parent);
  }
}
