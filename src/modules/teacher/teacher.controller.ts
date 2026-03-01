import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Request,
  UseGuards,
  NotFoundException,
} from '@nestjs/common';
import { Crud } from '@dataui/crud';
import { Teacher } from './teacher.entity';
import { TeacherDto } from './teacher.dto';
import { TeacherService } from './teacher.service';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { AttendanceDto } from '../attendance/attendance.dto';

@Crud({
  model: { type: Teacher },
  dto: { create: TeacherDto, update: TeacherDto },
})
@Controller('teachers')
export class TeacherController {
  constructor(public service: TeacherService) {}

  @Get('me/courses')
  @UseGuards(RolesGuard)
  @Roles('teacher')
  async getMyCourses(@Request() req) {
    const teacher = await this.service.findTeacherByUserId(req.user.id);
    if (!teacher) throw new NotFoundException('Teacher profile not found');
    return this.service.getTeacherCourses(teacher.id);
  }

  @Get('me/courses/:courseId/students')
  @UseGuards(RolesGuard)
  @Roles('teacher')
  async getCourseStudents(
    @Request() req,
    @Param('courseId') courseId: string,
  ) {
    const teacher = await this.service.findTeacherByUserId(req.user.id);
    if (!teacher) throw new NotFoundException('Teacher profile not found');
    return this.service.getEnrolledStudents(teacher.id, parseInt(courseId));
  }

  @Post('me/courses/:courseId/attendance')
  @UseGuards(RolesGuard)
  @Roles('teacher')
  async markAttendance(
    @Request() req,
    @Param('courseId') courseId: string,
    @Body() dto: AttendanceDto,
  ) {
    const teacher = await this.service.findTeacherByUserId(req.user.id);
    if (!teacher) throw new NotFoundException('Teacher profile not found');
    return this.service.markAttendance({ ...dto, subjectId: parseInt(courseId) });
  }

  @Get('me/classes')
  @UseGuards(RolesGuard)
  @Roles('teacher')
  async getMyClasses(@Request() req) {
    const teacher = await this.service.findTeacherByUserId(req.user.id);
    if (!teacher) throw new NotFoundException('Teacher profile not found');
    return this.service.getTeacherClasses(teacher.id);
  }

  @Get('me/dashboard')
  @UseGuards(RolesGuard)
  @Roles('teacher')
  async getDashboard(@Request() req) {
    const teacher = await this.service.findTeacherByUserId(req.user.id);
    if (!teacher) throw new NotFoundException('Teacher profile not found');
    return this.service.getTeacherDashboard(teacher.id);
  }
}
