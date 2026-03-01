import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  Column,
} from 'typeorm';
import { Parent } from '../parent/parent.entity';
import { Student } from '../student/student.entity';

@Entity('parent_student_relations')
export class ParentStudentRelation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  parentId: number;

  @ManyToOne(() => Parent, { eager: true })
  @JoinColumn({ name: 'parentId' })
  parent: Parent;

  @Column()
  studentId: number;

  @ManyToOne(() => Student, { eager: true })
  @JoinColumn({ name: 'studentId' })
  student: Student;

  @Column({ default: 'guardian' })
  relationship: string;

  @Column({ default: true })
  isPrimary: boolean;

  @CreateDateColumn()
  createdAt: Date;
}
