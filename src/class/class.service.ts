import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Class } from './entities/class.entity';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';

@Injectable()
export class ClassService {
  constructor(
    @InjectRepository(Class)
    private classRepository: Repository<Class>,
  ) {}

  async create(createClassDto: CreateClassDto): Promise<Class> {
    const cls = this.classRepository.create(createClassDto);
    return this.classRepository.save(cls);
  }

  async findAll(): Promise<Class[]> {
    return this.classRepository.find();
  }

  async findOne(id: number): Promise<Class> {
    const cls = await this.classRepository.findOne({ where: { id } });
    if (!cls) {
      throw new NotFoundException(`Class #${id} not found`);
    }
    return cls;
  }

  async update(id: number, updateClassDto: UpdateClassDto): Promise<Class> {
    await this.findOne(id);
    await this.classRepository.update(id, updateClassDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const cls = await this.findOne(id);
    await this.classRepository.remove(cls);
  }
}
