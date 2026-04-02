import { StudentGpa, SimpleGpa, WeightedGpa } from '../src/behavioral/strategy/GpaStrategy';

console.log('=== STRATEGY — Підрахунок GPA ===');
const studentGpa = new StudentGpa(new SimpleGpa());
const grades = [4, 3, 5, 4];

console.log(`Оцінки студента: ${grades.join(', ')}`);
console.log(`Простий GPA (всі оцінки рівні): ${studentGpa.getGpa(grades)}`);

studentGpa.setStrategy(new WeightedGpa([1, 1, 3, 1]));
console.log(`Зважений GPA (третя оцінка має вагу х3): ${studentGpa.getGpa(grades)}`);