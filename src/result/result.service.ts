import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Result } from "./result.entity";

@Injectable()
export class ResultService extends TypeOrmCrudService<Result> {
  constructor(@InjectRepository(Result) repo: Repository<Result>) {
    super(repo);
  }
}
