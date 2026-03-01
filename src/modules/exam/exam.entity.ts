import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Subject } from '../subject/subject.entity';
import { Class } from '../class/class.entity';

@Entity('exams')
export class Exam {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  type: string;

  @OneToOne(() => Subject, {
    eager: true,
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'subjectId' })
  subject: Subject;

  @OneToOne(() => Class, { eager: true, nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'classId' })
  class: Class;

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
