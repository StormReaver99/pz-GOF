// Factory Method — кожна фабрика створює свій тип курсу.
// Без патерну: великий if/else який треба міняти при кожному новому типі курсу.

export interface Course {
  code: string;
  title: string;
  describe(): string;
}

class LectureCourse implements Course {
  constructor(
    public code: string,
    public title: string,
    private lecturer: string
  ) {}

  describe(): string {
    return `Лекція | ${this.code} - ${this.title} | Викладач: ${this.lecturer}`;
  }
}

class LabCourse implements Course {
  constructor(
    public code: string,
    public title: string,
    private labCount: number
  ) {}

  describe(): string {
    return `Лабораторна | ${this.code} - ${this.title} | Робіт: ${this.labCount}`;
  }
}

export abstract class CourseFactory {
  abstract createCourse(code: string, title: string): Course;
}

export class LectureCourseFactory extends CourseFactory {
  constructor(private lecturer: string) {
    super();
  }

  createCourse(code: string, title: string): Course {
    return new LectureCourse(code, title, this.lecturer);
  }
}

export class LabCourseFactory extends CourseFactory {
  constructor(private labCount: number) {
    super();
  }

  createCourse(code: string, title: string): Course {
    return new LabCourse(code, title, this.labCount);
  }
}