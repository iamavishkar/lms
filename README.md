# LMS - Learning Management System

A complete NestJS backend application for a Learning Management System with MySQL database, TypeORM for database management, and JWT-based authentication.

## Technology Stack

- **Framework**: NestJS
- **Database**: MySQL
- **ORM**: TypeORM
- **Authentication**: JWT (JSON Web Tokens)
- **Documentation**: Swagger/OpenAPI

## Prerequisites

- Node.js (v18+)
- MySQL (v8+)
- npm or yarn

## Installation

```bash
npm install
```

## Environment Setup

Copy the example environment file and configure it:

```bash
cp .env.example .env
```

Edit `.env` with your configuration:

```
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USER=root
DATABASE_PASSWORD=password
DATABASE_NAME=lms_db
JWT_SECRET=your-secret-key
JWT_EXPIRATION=1d
PORT=3000
```

## Database Setup

Create the MySQL database:

```sql
CREATE DATABASE lms_db;
```

The application uses TypeORM with `synchronize: true` which will automatically create tables on startup.

## Running the Application

```bash
# development
npm run start:dev

# production mode
npm run start:prod
```

## API Documentation

Swagger documentation is available at: `http://localhost:3000/api/docs`

## API Endpoints

### Authentication
- `POST /api/auth/login` - Login with email and password
- `POST /api/auth/register` - Register a new user

### Users
- `GET /api/users` - List all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Roles
- `GET /api/roles` - List all roles
- `POST /api/roles` - Create role
- `PUT /api/roles/:id` - Update role
- `DELETE /api/roles/:id` - Delete role

### Students
- `GET /api/students` - List all students
- `GET /api/students/:id` - Get student by ID
- `POST /api/students` - Create student
- `PUT /api/students/:id` - Update student
- `DELETE /api/students/:id` - Delete student

### Teachers
- `GET /api/teachers` - List all teachers
- `GET /api/teachers/:id` - Get teacher by ID
- `POST /api/teachers` - Create teacher
- `PUT /api/teachers/:id` - Update teacher
- `DELETE /api/teachers/:id` - Delete teacher

### Parents
- `GET /api/parents` - List all parents
- `POST /api/parents` - Create parent
- `PUT /api/parents/:id` - Update parent
- `DELETE /api/parents/:id` - Delete parent

### Classes
- `GET /api/classes` - List all classes
- `POST /api/classes` - Create class
- `PUT /api/classes/:id` - Update class
- `DELETE /api/classes/:id` - Delete class

### Subjects
- `GET /api/subjects` - List all subjects
- `POST /api/subjects` - Create subject
- `PUT /api/subjects/:id` - Update subject
- `DELETE /api/subjects/:id` - Delete subject

### Attendance
- `POST /api/attendance/mark` - Mark attendance
- `GET /api/attendance` - List all attendance records
- `GET /api/attendance/student/:studentId` - Get attendance by student
- `GET /api/attendance/class/:classId` - Get attendance by class
- `PUT /api/attendance/:id` - Update attendance

### Exams
- `GET /api/exams` - List all exams
- `POST /api/exams` - Create exam
- `PUT /api/exams/:id` - Update exam
- `DELETE /api/exams/:id` - Delete exam

### Results
- `GET /api/results` - List all results
- `GET /api/results/student/:studentId` - Get results by student
- `POST /api/results` - Create result
- `PUT /api/results/:id` - Update result
- `DELETE /api/results/:id` - Delete result

### Dashboard
- `GET /api/dashboard/stats` - Get dashboard statistics

### File Upload
- `POST /api/file-upload/upload` - Upload a file

## Testing

```bash
# unit tests
npm run test

# test coverage
npm run test:cov
``` 
