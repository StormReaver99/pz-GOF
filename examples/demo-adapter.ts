import { OldGradeBook, GradeAdapter } from '../src/structural/adapter/GradeAdapter';

console.log('=== ADAPTER — Конвертація оцінок ===');
const oldBook = new OldGradeBook();
const adapter = new GradeAdapter(oldBook);

adapter.setLetterGrade('STU-1', 'A');
adapter.setLetterGrade('STU-2', 'C');

console.log(`STU-1: літерна=${adapter.getLetterGrade('STU-1')}, числова=${oldBook.getGrade('STU-1')}`);
console.log(`STU-2: літерна=${adapter.getLetterGrade('STU-2')}, числова=${oldBook.getGrade('STU-2')}`);