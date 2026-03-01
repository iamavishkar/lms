import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Term } from '../term/term.entity';
import { StudentEnrollment } from '../enrollment/enrollment.entity';
import { Subject } from '../subject/subject.entity';
import { Student } from '../student/student.entity';
import { Class } from '../class/class.entity';

@Injectable()
export class CoordinatorService {
  constructor(
    @InjectRepository(Term) private termRepo: Repository<Term>,
    @InjectRepository(StudentEnrollment)
    private enrollmentRepo: Repository<StudentEnrollment>,
    @InjectRepository(Subject) private subjectRepo: Repository<Subject>,
    @InjectRepository(Student) private studentRepo: Repository<Student>,
  ) {}

  async createTerm(dto: {
    name: string;
    code: string;
    startDate: string | Date;
    endDate: string | Date;
  }): Promise<Term> {
    const term = this.termRepo.create(dto as Partial<Term>);
    return this.termRepo.save(term);
  }

  async getTerms(): Promise<Term[]> {
    return this.termRepo.find();
  }

  async enrollStudent(
    studentId: number,
    subjectId: number,
    termId: number,
    classId?: number,
  ): Promise<StudentEnrollment> {
    const enrollment = this.enrollmentRepo.create({
      studentId,
      subjectId,
      termId,
      classId,
    });
    return this.enrollmentRepo.save(enrollment);
  }

  async bulkEnroll(
    studentIds: number[],
    subjectId: number,
    termId: number,
    classId?: number,
  ): Promise<StudentEnrollment[]> {
    const enrollments = studentIds.map((studentId) =>
      this.enrollmentRepo.create({ studentId, subjectId, termId, classId }),
    );
    return this.enrollmentRepo.save(enrollments);
  }

  async promoteStudent(
    studentId: number,
    newClassId: number,
    termId: number,
  ): Promise<Student> {
    const student = await this.studentRepo.findOne({ where: { id: studentId } });
    if (!student) throw new Error('Student not found');
    student.class = { id: newClassId } as Class;
    return this.studentRepo.save(student);
  }

  async assignTeacher(subjectId: number, teacherId: number): Promise<Subject> {
    const subject = await this.subjectRepo.findOne({ where: { id: subjectId } });
    if (!subject) throw new Error('Subject not found');
    subject.teacherId = teacherId;
    return this.subjectRepo.save(subject);
  }

  async getAnalytics() {
    const [termCount, enrollmentCount, studentCount, subjectCount] =
      await Promise.all([
        this.termRepo.count(),
        this.enrollmentRepo.count(),
        this.studentRepo.count(),
        this.subjectRepo.count(),
      ]);
    return { termCount, enrollmentCount, studentCount, subjectCount };
  }
}
