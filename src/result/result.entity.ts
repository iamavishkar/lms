import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("results")
export class Result {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  studentId: number;

  @Column()
  examId: number;

  @Column({ type: "decimal", precision: 5, scale: 2 })
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
