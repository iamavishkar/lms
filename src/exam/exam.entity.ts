import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("exams")
export class Exam {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  examType: string;

  @Column({ nullable: true })
  subjectId: number;

  @Column({ nullable: true })
  classId: number;

  @Column({ nullable: true, type: "date" })
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
