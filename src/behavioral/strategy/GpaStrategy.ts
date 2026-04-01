// Strategy — алгоритм підрахунку GPA можна міняти не змінюючи клас студента.

export interface GpaStrategy {
  calculate(grades: number[]): number;
}

export class SimpleGpa implements GpaStrategy {
  calculate(grades: number[]): number {
    if (grades.length === 0) return 0;
    const sum = grades.reduce((a, b) => a + b, 0);
    return parseFloat((sum / grades.length).toFixed(2));
  }
}

export class WeightedGpa implements GpaStrategy {
  constructor(private weights: number[]) {}

  calculate(grades: number[]): number {
    if (grades.length === 0) return 0;
    let total = 0;
    let totalWeight = 0;
    grades.forEach((g, i) => {
      const w = this.weights[i] ?? 1;
      total += g * w;
      totalWeight += w;
    });
    return parseFloat((total / totalWeight).toFixed(2));
  }
}

export class StudentGpa {
  constructor(private strategy: GpaStrategy) {}

  setStrategy(strategy: GpaStrategy): void {
    this.strategy = strategy;
  }

  getGpa(grades: number[]): number {
    return this.strategy.calculate(grades);
  }
}