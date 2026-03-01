import { AttendanceStatusEnum } from 'src/common/enums/attendance.enum';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Student } from '../student/student.entity';
import { Class } from '../class/class.entity';
import { Subject } from '../subject/subject.entity';

@Entity('attendance')
export class Attendance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  studentId: number;

  @ManyToOne(() => Student, { eager: true })
  @JoinColumn({ name: 'studentId' })
  student: Student;

  @Column()
  classId: number;

  @ManyToOne(() => Class, { eager: true })
  @JoinColumn({ name: 'classId' })
  class: Class;

  @Column({ nullable: true })
  subjectId: number;

  @ManyToOne(() => Subject, { eager: true, nullable: true })
  @JoinColumn({ name: 'subjectId' })
  subject: Subject;

  @Column({ type: 'date' })
  date: Date;

  @Column({
    type: 'enum',
    enum: AttendanceStatusEnum,
    default: AttendanceStatusEnum.PRESENT,
  })
  status: AttendanceStatusEnum;

  @Column({ nullable: true })
  remarks: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
