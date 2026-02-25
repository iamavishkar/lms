import { Controller } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { User } from "./user.entity";
import { UserDto } from "./user.dto";
import { UserService } from "./user.service";

@Crud({
  model: { type: User },
  dto: { create: UserDto, update: UserDto },
})
@Controller("users")
export class UserController {
  constructor(public service: UserService) {}
}
