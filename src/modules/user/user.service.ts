import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
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

  async save(dto: UserDto): Promise<User> {
    const existing = await this.findByEmail(dto.email);
    if (existing) {
      throw new ConflictException('Email already exists');
    }
    if (!dto.password) {
      dto.password = await bcrypt.hash(dto.password, 10);
    }
    return this.repo.save(dto);
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
