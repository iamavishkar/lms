import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeepPartial, Repository } from "typeorm";
import { CrudRequest } from "@nestjsx/crud";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Student } from "./student.entity";
import { User } from "../user/user.entity";

@Injectable()
export class StudentService extends TypeOrmCrudService<Student> {
  constructor(@InjectRepository(Student) repo: Repository<Student>) {
    super(repo);
  }

  async createOne(
    req: CrudRequest,
    dto: DeepPartial<Student>,
  ): Promise<Student> {
    const { userId, ...rest } = dto as any;
    return super.createOne(req, {
      ...rest,
      user: { id: userId } as User,
    } as DeepPartial<Student>);
  }

  async updateOne(
    req: CrudRequest,
    dto: DeepPartial<Student>,
  ): Promise<Student> {
    const { userId, ...rest } = dto as any;
    const entity: any = { ...rest };
    if (userId !== undefined) entity.user = { id: userId } as User;
    return super.updateOne(req, entity as DeepPartial<Student>);
  }
}
