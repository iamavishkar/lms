import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from '../student/entities/student.entity';
import { Teacher } from '../teacher/entities/teacher.entity';
import { Class } from '../class/entities/class.entity';
import { Attendance } from '../attendance/entities/attendance.entity';
import { Exam } from '../exam/entities/exam.entity';

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
    @InjectRepository(Teacher)
    private teacherRepository: Repository<Teacher>,
    @InjectRepository(Class)
    private classRepository: Repository<Class>,
    @InjectRepository(Attendance)
    private attendanceRepository: Repository<Attendance>,
    @InjectRepository(Exam)
    private examRepository: Repository<Exam>,
  ) {}

  async getStats() {
    const [studentCount, teacherCount, classCount] = await Promise.all([
      this.studentRepository.count(),
      this.teacherRepository.count(),
      this.classRepository.count(),
    ]);

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayStr = today.toISOString().split('T')[0];

    const todayAttendance = await this.attendanceRepository
      .createQueryBuilder('attendance')
      .where('DATE(attendance.date) = :date', { date: todayStr })
      .getMany();

    const upcomingExams = await this.examRepository
      .createQueryBuilder('exam')
      .where('exam.date >= :today', { today: todayStr })
      .orderBy('exam.date', 'ASC')
      .limit(5)
      .getMany();

    return {
      studentCount,
      teacherCount,
      classCount,
      todayAttendance: {
        total: todayAttendance.length,
        ...todayAttendance.reduce(
          (acc, a) => {
            acc[a.status] = (acc[a.status] || 0) + 1;
            return acc;
          },
          { present: 0, absent: 0, late: 0 },
        ),
      },
      upcomingExams,
    };
  }
}
