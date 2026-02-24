import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { Role } from './role.entity';
import { RoleDto } from './role.dto';
import { RoleService } from './role.service';

@Crud({
  model: { type: Role },
  dto: { create: RoleDto, update: RoleDto },
})
@UseGuards(JwtAuthGuard)
@Controller('roles')
export class RoleController implements CrudController<Role> {
  constructor(public service: RoleService) {}
}
