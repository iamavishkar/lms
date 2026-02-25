import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeepPartial, Repository } from "typeorm";
import { CrudRequest } from "@nestjsx/crud";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Parent } from "./parent.entity";
import { User } from "../user/user.entity";

@Injectable()
export class ParentService extends TypeOrmCrudService<Parent> {
  constructor(@InjectRepository(Parent) repo: Repository<Parent>) {
    super(repo);
  }

  async createOne(req: CrudRequest, dto: DeepPartial<Parent>): Promise<Parent> {
    const { userId, ...rest } = dto as any;
    return super.createOne(req, {
      ...rest,
      user: { id: userId } as User,
    } as DeepPartial<Parent>);
  }

  async updateOne(req: CrudRequest, dto: DeepPartial<Parent>): Promise<Parent> {
    const { userId, ...rest } = dto as any;
    const entity: any = { ...rest };
    if (userId !== undefined) entity.user = { id: userId } as User;
    return super.updateOne(req, entity as DeepPartial<Parent>);
  }
}
