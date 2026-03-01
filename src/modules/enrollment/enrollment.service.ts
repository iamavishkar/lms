import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { StudentEnrollment } from './enrollment.entity';

@Injectable()
export class EnrollmentService extends TypeOrmCrudService<StudentEnrollment> {
  constructor(
    @InjectRepository(StudentEnrollment)
    repo: Repository<StudentEnrollment>,
  ) {
    super(repo);
  }

  async enrollStudent(
    studentId: number,
    subjectId: number,
    termId: number,
    classId?: number,
  ): Promise<StudentEnrollment> {
    const enrollment = this.repo.create({
      studentId,
      subjectId,
      termId,
      classId,
    });
    return this.repo.save(enrollment);
  }

  async bulkEnroll(
    studentIds: number[],
    subjectId: number,
    termId: number,
    classId?: number,
  ): Promise<StudentEnrollment[]> {
    const enrollments = studentIds.map((studentId) =>
      this.repo.create({ studentId, subjectId, termId, classId }),
    );
    return this.repo.save(enrollments);
  }

  async getStudentEnrollments(studentId: number): Promise<StudentEnrollment[]> {
    return this.repo.find({ where: { studentId } });
  }

  async getSubjectEnrollments(subjectId: number): Promise<StudentEnrollment[]> {
    return this.repo.find({ where: { subjectId } });
  }
}
