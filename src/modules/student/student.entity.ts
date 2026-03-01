import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../user/user.entity';
import { Class } from '../class/class.entity';

@Entity('students')
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  enrollmentNumber: string;

  @Column({ type: 'date' })
  dateOfBirth: Date;

  @Column()
  address: string;

  @Column()
  phoneNumber: string;

  @OneToOne(() => User, { eager: true, nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;

  @OneToOne(() => Class, { eager: true, nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'classId' })
  class: Class;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
