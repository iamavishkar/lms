import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudRequest } from '@nestjsx/crud';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './user.entity';
import { UserDto } from './user.dto';

@Injectable()
export class UserService extends TypeOrmCrudService<User> {
  constructor(@InjectRepository(User) repo: Repository<User>) {
    super(repo);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.repo.findOne({ where: { email } });
  }

  async createOne(req: CrudRequest, dto: UserDto): Promise<User> {
    const existing = await this.findByEmail(dto.email);
    if (existing) {
      throw new ConflictException('Email already exists');
    }
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    return super.createOne(req, { ...dto, password: hashedPassword });
  }

  async updateOne(req: CrudRequest, dto: UserDto): Promise<User> {
    const data: UserDto = { ...dto };
    if (data.email) {
      const id: number = req.parsed.paramsFilter.find(
        (f) => f.field === 'id',
      )?.value;
      const existing = await this.findByEmail(data.email);
      if (existing && existing.id !== id) {
        throw new ConflictException('Email already exists');
      }
    }
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }
    return super.updateOne(req, data);
  }

  async register(dto: UserDto): Promise<User> {
    const existing = await this.findByEmail(dto.email);
    if (existing) {
      throw new ConflictException('Email already exists');
    }
    const password = await bcrypt.hash(dto.password, 10);
    return this.repo.save(this.repo.create({ ...dto, password }));
  }
}
