import { Injectable, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Parent } from './parent.entity';
import { ParentStudentRelation } from '../parent-student/parent-student.entity';
import { Attendance } from '../attendance/attendance.entity';
import { Result } from '../result/result.entity';
import { StudentEnrollment } from '../enrollment/enrollment.entity';

@Injectable()
export class ParentService extends TypeOrmCrudService<Parent> {
  constructor(
    @InjectRepository(Parent) repo: Repository<Parent>,
    @InjectRepository(ParentStudentRelation)
    private relationRepo: Repository<ParentStudentRelation>,
    @InjectRepository(Attendance)
    private attendanceRepo: Repository<Attendance>,
    @InjectRepository(Result) private resultRepo: Repository<Result>,
    @InjectRepository(StudentEnrollment)
    private enrollmentRepo: Repository<StudentEnrollment>,
  ) {
    super(repo);
  }

  async findParentByUserId(userId: number): Promise<Parent | undefined> {
    return this.repo.findOne({ where: { user: { id: userId } } });
  }

  async getChildren(parentId: number): Promise<ParentStudentRelation[]> {
    return this.relationRepo.find({ where: { parentId } });
  }

  private async verifyParentChild(
    parentId: number,
    studentId: number,
  ): Promise<void> {
    const relation = await this.relationRepo.findOne({
      where: { parentId, studentId },
    });
    if (!relation) {
      throw new ForbiddenException('Access denied: not your child');
    }
  }

  async getChildAttendance(
    parentId: number,
    studentId: number,
  ): Promise<Attendance[]> {
    await this.verifyParentChild(parentId, studentId);
    return this.attendanceRepo.find({ where: { studentId } });
  }

  async getChildResults(
    parentId: number,
    studentId: number,
  ): Promise<Result[]> {
    await this.verifyParentChild(parentId, studentId);
    return this.resultRepo.find({ where: { studentId } });
  }

  async getChildDashboard(parentId: number, studentId: number) {
    await this.verifyParentChild(parentId, studentId);
    const [courses, attendance, results] = await Promise.all([
      this.enrollmentRepo.count({ where: { studentId } }),
      this.attendanceRepo.count({ where: { studentId } }),
      this.resultRepo.count({ where: { studentId } }),
    ]);
    return { enrolledCourses: courses, attendanceRecords: attendance, results };
  }
}
