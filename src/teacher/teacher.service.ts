import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeepPartial, Repository } from "typeorm";
import { CrudRequest } from "@nestjsx/crud";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Teacher } from "./teacher.entity";
import { User } from "../user/user.entity";

@Injectable()
export class TeacherService extends TypeOrmCrudService<Teacher> {
  constructor(@InjectRepository(Teacher) repo: Repository<Teacher>) {
    super(repo);
  }

  async createOne(
    req: CrudRequest,
    dto: DeepPartial<Teacher>,
  ): Promise<Teacher> {
    const { userId, ...rest } = dto as any;
    return super.createOne(req, {
      ...rest,
      user: { id: userId } as User,
    } as DeepPartial<Teacher>);
  }

  async updateOne(
    req: CrudRequest,
    dto: DeepPartial<Teacher>,
  ): Promise<Teacher> {
    const { userId, ...rest } = dto as any;
    const entity: any = { ...rest };
    if (userId !== undefined) entity.user = { id: userId } as User;
    return super.updateOne(req, entity as DeepPartial<Teacher>);
  }
}
