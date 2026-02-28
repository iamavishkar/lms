import { AttendanceStatusEnum } from 'src/common/enums/attendance.enum';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('attendance')
export class Attendance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  studentId: number;

  @Column()
  classId: number;

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
