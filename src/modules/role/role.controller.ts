import { Controller } from '@nestjs/common';
import { Crud } from '@dataui/crud';
import { Role } from './role.entity';
import { RoleDto } from './role.dto';
import { RoleService } from './role.service';

@Crud({
  model: { type: Role },
  dto: { create: RoleDto, update: RoleDto },
})
@Controller('roles')
export class RoleController {
  constructor(public service: RoleService) {}
}
