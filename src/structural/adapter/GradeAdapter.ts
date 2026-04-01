// Adapter — стара система зберігає оцінки числами (1-5),
// нова система працює з літерами (A-F). Адаптер конвертує між ними.

export class OldGradeBook {
  private grades: Map<string, number> = new Map();

  setGrade(studentId: string, grade: number): void {
    this.grades.set(studentId, grade);
  }

  getGrade(studentId: string): number | undefined {
    return this.grades.get(studentId);
  }
}

export interface NewGradeBook {
  setLetterGrade(studentId: string, grade: 'A' | 'B' | 'C' | 'D' | 'F'): void;
  getLetterGrade(studentId: string): 'A' | 'B' | 'C' | 'D' | 'F' | undefined;
}

const toNum: Record<'A' | 'B' | 'C' | 'D' | 'F', number> = {
  A: 5, B: 4, C: 3, D: 2, F: 1,
};

const toLetter: Record<number, 'A' | 'B' | 'C' | 'D' | 'F'> = {
  5: 'A', 4: 'B', 3: 'C', 2: 'D', 1: 'F',
};

export class GradeAdapter implements NewGradeBook {
  constructor(private old: OldGradeBook) {}

  setLetterGrade(studentId: string, grade: 'A' | 'B' | 'C' | 'D' | 'F'): void {
    this.old.setGrade(studentId, toNum[grade]);
  }

  getLetterGrade(studentId: string): 'A' | 'B' | 'C' | 'D' | 'F' | undefined {
    const num = this.old.getGrade(studentId);
    if (num === undefined) return undefined;
    return toLetter[num];
  }
}