import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Attendance } from './attendance.entity';

@Injectable()
export class AttendanceService extends TypeOrmCrudService<Attendance> {
  constructor(@InjectRepository(Attendance) repo: Repository<Attendance>) {
    super(repo);
  }
}
