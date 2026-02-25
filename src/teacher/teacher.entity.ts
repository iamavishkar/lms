import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { User } from "../user/user.entity";

@Entity("teachers")
export class Teacher {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, { eager: true, nullable: false, onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column({ unique: true })
  employeeId: string;

  @Column({ nullable: true })
  specialization: string;

  @Column({ nullable: true })
  qualifications: string;

  @Column({ nullable: true, type: "date" })
  joiningDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
