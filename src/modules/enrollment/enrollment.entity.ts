import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  Column,
} from 'typeorm';
import { Student } from '../student/student.entity';
import { Subject } from '../subject/subject.entity';
import { Term } from '../term/term.entity';
import { Class } from '../class/class.entity';

@Entity('student_enrollments')
export class StudentEnrollment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  studentId: number;

  @ManyToOne(() => Student, { eager: true })
  @JoinColumn({ name: 'studentId' })
  student: Student;

  @Column()
  subjectId: number;

  @ManyToOne(() => Subject, { eager: true })
  @JoinColumn({ name: 'subjectId' })
  subject: Subject;

  @Column()
  termId: number;

  @ManyToOne(() => Term, { eager: true })
  @JoinColumn({ name: 'termId' })
  term: Term;

  @Column({ nullable: true })
  classId: number;

  @ManyToOne(() => Class, { eager: true, nullable: true })
  @JoinColumn({ name: 'classId' })
  class: Class;

  @CreateDateColumn()
  enrolledAt: Date;
}
