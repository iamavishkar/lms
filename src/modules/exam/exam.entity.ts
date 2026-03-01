import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Subject } from '../subject/subject.entity';
import { Class } from '../class/class.entity';
import { Term } from '../term/term.entity';

@Entity('exams')
export class Exam {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  type: string;

  @Column({ nullable: true })
  subjectId: number;

  @ManyToOne(() => Subject, { eager: true, nullable: true })
  @JoinColumn({ name: 'subjectId' })
  subject: Subject;

  @Column({ nullable: true })
  classId: number;

  @ManyToOne(() => Class, { eager: true, nullable: true })
  @JoinColumn({ name: 'classId' })
  class: Class;

  @Column({ nullable: true })
  termId: number;

  @ManyToOne(() => Term, { eager: true, nullable: true })
  @JoinColumn({ name: 'termId' })
  term: Term;

  @Column({ nullable: true, type: 'date' })
  date: Date;

  @Column({ nullable: true })
  totalMarks: number;

  @Column({ nullable: true })
  duration: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
