import {
  Controller,
  Get,
  Param,
  Request,
  UseGuards,
  NotFoundException,
} from '@nestjs/common';
import { Crud } from '@dataui/crud';
import { Parent } from './parent.entity';
import { ParentDto } from './parent.dto';
import { ParentService } from './parent.service';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';

@Crud({
  model: { type: Parent },
  dto: { create: ParentDto, update: ParentDto },
})
@Controller('parents')
export class ParentController {
  constructor(public service: ParentService) {}

  @Get('me/children')
  @UseGuards(RolesGuard)
  @Roles('parent')
  async getMyChildren(@Request() req) {
    const parent = await this.service.findParentByUserId(req.user.id);
    if (!parent) throw new NotFoundException('Parent profile not found');
    return this.service.getChildren(parent.id);
  }

  @Get('me/children/:studentId/attendance')
  @UseGuards(RolesGuard)
  @Roles('parent')
  async getChildAttendance(
    @Request() req,
    @Param('studentId') studentId: string,
  ) {
    const parent = await this.service.findParentByUserId(req.user.id);
    if (!parent) throw new NotFoundException('Parent profile not found');
    return this.service.getChildAttendance(parent.id, parseInt(studentId));
  }

  @Get('me/children/:studentId/results')
  @UseGuards(RolesGuard)
  @Roles('parent')
  async getChildResults(
    @Request() req,
    @Param('studentId') studentId: string,
  ) {
    const parent = await this.service.findParentByUserId(req.user.id);
    if (!parent) throw new NotFoundException('Parent profile not found');
    return this.service.getChildResults(parent.id, parseInt(studentId));
  }

  @Get('me/children/:studentId/dashboard')
  @UseGuards(RolesGuard)
  @Roles('parent')
  async getChildDashboard(
    @Request() req,
    @Param('studentId') studentId: string,
  ) {
    const parent = await this.service.findParentByUserId(req.user.id);
    if (!parent) throw new NotFoundException('Parent profile not found');
    return this.service.getChildDashboard(parent.id, parseInt(studentId));
  }
}
