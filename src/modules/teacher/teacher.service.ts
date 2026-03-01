import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Teacher } from './teacher.entity';
import { Subject } from '../subject/subject.entity';
import { Class } from '../class/class.entity';
import { Attendance } from '../attendance/attendance.entity';
import { StudentEnrollment } from '../enrollment/enrollment.entity';
import { AttendanceDto } from '../attendance/attendance.dto';
import { AttendanceStatusEnum } from 'src/common/enums/attendance.enum';

@Injectable()
export class TeacherService extends TypeOrmCrudService<Teacher> {
  constructor(
    @InjectRepository(Teacher) repo: Repository<Teacher>,
    @InjectRepository(Subject) private subjectRepo: Repository<Subject>,
    @InjectRepository(Class) private classRepo: Repository<Class>,
    @InjectRepository(Attendance)
    private attendanceRepo: Repository<Attendance>,
    @InjectRepository(StudentEnrollment)
    private enrollmentRepo: Repository<StudentEnrollment>,
  ) {
    super(repo);
  }

  async findTeacherByUserId(userId: number): Promise<Teacher | undefined> {
    return this.repo.findOne({ where: { user: { id: userId } } });
  }

  async getTeacherCourses(teacherId: number): Promise<Subject[]> {
    return this.subjectRepo.find({ where: { teacherId } });
  }

  async getTeacherClasses(teacherId: number): Promise<Class[]> {
    return this.classRepo.find({ where: { teacherId } });
  }

  async getEnrolledStudents(
    teacherId: number,
    subjectId: number,
  ): Promise<StudentEnrollment[]> {
    const subject = await this.subjectRepo.findOne({
      where: { id: subjectId, teacherId },
    });
    if (!subject) return [];
    return this.enrollmentRepo.find({ where: { subjectId } });
  }

  async markAttendance(dto: AttendanceDto & { subjectId?: number }): Promise<Attendance> {
    const attendance = this.attendanceRepo.create({
      studentId: dto.studentId,
      classId: dto.classId,
      subjectId: dto.subjectId,
      date: new Date(dto.date),
      status: dto.status as AttendanceStatusEnum,
      remarks: dto.remarks,
    });
    return this.attendanceRepo.save(attendance);
  }

  async getTeacherDashboard(teacherId: number) {
    const [courseCount, classCount] = await Promise.all([
      this.subjectRepo.count({ where: { teacherId } }),
      this.classRepo.count({ where: { teacherId } }),
    ]);
    return { assignedCourses: courseCount, assignedClasses: classCount };
  }
}
