import { Controller, UseGuards, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { User } from './user.entity';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Crud({
  model: { type: User },
  dto: { create: UserDto, update: UserDto },
})
@UseGuards(JwtAuthGuard)
@UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
export class UserController implements CrudController<User> {
  constructor(public service: UserService) {}
}
