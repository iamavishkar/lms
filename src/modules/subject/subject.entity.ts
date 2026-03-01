import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Teacher } from '../teacher/teacher.entity';
import { Class } from '../class/class.entity';

@Entity('subjects')
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  code: string;

  @Column({ nullable: true })
  description: string;

  @OneToOne(() => Teacher, {
    eager: true,
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'teacherId' })
  teacher: Teacher;

  @OneToOne(() => Class, { eager: true, nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'classId' })
  class: Class;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
