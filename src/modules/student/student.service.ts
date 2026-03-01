import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Student } from './student.entity';
import { StudentEnrollment } from '../enrollment/enrollment.entity';
import { Attendance } from '../attendance/attendance.entity';
import { Result } from '../result/result.entity';
import { Exam } from '../exam/exam.entity';

@Injectable()
export class StudentService extends TypeOrmCrudService<Student> {
  constructor(
    @InjectRepository(Student) repo: Repository<Student>,
    @InjectRepository(StudentEnrollment)
    private enrollmentRepo: Repository<StudentEnrollment>,
    @InjectRepository(Attendance)
    private attendanceRepo: Repository<Attendance>,
    @InjectRepository(Result) private resultRepo: Repository<Result>,
    @InjectRepository(Exam) private examRepo: Repository<Exam>,
  ) {
    super(repo);
  }

  async findStudentByUserId(userId: number): Promise<Student | undefined> {
    return this.repo.findOne({ where: { user: { id: userId } } });
  }

  async getStudentCourses(studentId: number): Promise<StudentEnrollment[]> {
    return this.enrollmentRepo.find({ where: { studentId } });
  }

  async getStudentAttendanceForSubject(
    studentId: number,
    subjectId: number,
  ): Promise<Attendance[]> {
    return this.attendanceRepo.find({ where: { studentId, subjectId } });
  }

  async getStudentResultsForSubject(
    studentId: number,
    subjectId: number,
  ): Promise<Result[]> {
    return this.resultRepo
      .createQueryBuilder('result')
      .leftJoinAndSelect('result.exam', 'exam')
      .where('result.studentId = :studentId', { studentId })
      .andWhere('exam.subjectId = :subjectId', { subjectId })
      .getMany();
  }

  async getStudentExamsForSubject(
    studentId: number,
    subjectId: number,
  ): Promise<Exam[]> {
    const enrollments = await this.enrollmentRepo.find({
      where: { studentId, subjectId },
    });
    if (!enrollments.length) return [];
    return this.examRepo.find({ where: { subjectId } });
  }

  async getStudentDashboard(studentId: number) {
    const [courses, attendanceCount, resultCount] = await Promise.all([
      this.enrollmentRepo.count({ where: { studentId } }),
      this.attendanceRepo.count({ where: { studentId } }),
      this.resultRepo.count({ where: { studentId } }),
    ]);
    return { enrolledCourses: courses, attendanceRecords: attendanceCount, results: resultCount };
  }
}
