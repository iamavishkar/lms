import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Student } from '../student/student.entity';
import { Exam } from '../exam/exam.entity';

@Entity('results')
export class Result {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Student, {
    eager: true,
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'studentId' })
  student: Student;

  @OneToOne(() => Exam, { eager: true, nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'examId' })
  exam: Exam;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  marksObtained: number;

  @Column({ nullable: true })
  grade: string;

  @Column({ nullable: true })
  remarks: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
