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

@Entity('students')
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, { eager: true, nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ unique: true })
  enrollmentNumber: string;

  @Column()
  class: string;

  @Column({ type: 'date' })
  dateOfBirth: Date;

  @Column()
  address: string;

  @Column()
  phoneNumber: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
