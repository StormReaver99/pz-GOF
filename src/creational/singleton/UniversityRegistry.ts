// Singleton — реєстр університету існує в одному екземплярі.
// Без патерну: кожен модуль створює свій реєстр, дані не збігаються.

export interface StudentRecord {
  id: string;
  name: string;
  year: number;
}

export class UniversityRegistry {
  private static instance: UniversityRegistry | null = null;
  private students: StudentRecord[] = [];
  private nextId = 1;

  private constructor() {}

  static getInstance(): UniversityRegistry {
    if (!UniversityRegistry.instance) {
      UniversityRegistry.instance = new UniversityRegistry();
    }
    return UniversityRegistry.instance;
  }

  enroll(name: string, year: number): StudentRecord {
    const student = { id: `STU-${this.nextId++}`, name, year };
    this.students.push(student);
    return student;
  }

  getAll(): StudentRecord[] {
    return this.students;
  }

  count(): number {
    return this.students.length;
  }
}