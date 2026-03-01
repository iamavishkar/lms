import {
  Controller,
  Get,
  Param,
  Request,
  UseGuards,
  NotFoundException,
} from '@nestjs/common';
import { Crud } from '@dataui/crud';
import { Student } from './student.entity';
import { StudentDto } from './student.dto';
import { StudentService } from './student.service';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';

@Crud({
  model: { type: Student },
  dto: { create: StudentDto, update: StudentDto },
})
@Controller('students')
export class StudentController {
  constructor(public service: StudentService) {}

  @Get('me/courses')
  @UseGuards(RolesGuard)
  @Roles('student')
  async getMyCourses(@Request() req) {
    const student = await this.service.findStudentByUserId(req.user.id);
    if (!student) throw new NotFoundException('Student profile not found');
    return this.service.getStudentCourses(student.id);
  }

  @Get('me/courses/:courseId/attendance')
  @UseGuards(RolesGuard)
  @Roles('student')
  async getCourseAttendance(
    @Request() req,
    @Param('courseId') courseId: string,
  ) {
    const student = await this.service.findStudentByUserId(req.user.id);
    if (!student) throw new NotFoundException('Student profile not found');
    return this.service.getStudentAttendanceForSubject(
      student.id,
      parseInt(courseId),
    );
  }

  @Get('me/courses/:courseId/results')
  @UseGuards(RolesGuard)
  @Roles('student')
  async getCourseResults(@Request() req, @Param('courseId') courseId: string) {
    const student = await this.service.findStudentByUserId(req.user.id);
    if (!student) throw new NotFoundException('Student profile not found');
    return this.service.getStudentResultsForSubject(
      student.id,
      parseInt(courseId),
    );
  }

  @Get('me/courses/:courseId/exams')
  @UseGuards(RolesGuard)
  @Roles('student')
  async getCourseExams(@Request() req, @Param('courseId') courseId: string) {
    const student = await this.service.findStudentByUserId(req.user.id);
    if (!student) throw new NotFoundException('Student profile not found');
    return this.service.getStudentExamsForSubject(
      student.id,
      parseInt(courseId),
    );
  }

  @Get('me/dashboard')
  @UseGuards(RolesGuard)
  @Roles('student')
  async getDashboard(@Request() req) {
    const student = await this.service.findStudentByUserId(req.user.id);
    if (!student) throw new NotFoundException('Student profile not found');
    return this.service.getStudentDashboard(student.id);
  }
}
