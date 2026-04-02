import { StudentList } from '../src/behavioral/command/StudentList';
import { ExpelCommand } from '../src/behavioral/command/ExpelCommand';
import { DeanOffice } from '../src/behavioral/command/DeanOffice';

console.log('=== COMMAND — Дії деканату ===');
const studentList = new StudentList();
studentList.add('Сидоренко');
studentList.add('Мороз');
console.log(`Початковий список: ${studentList.getAll().join(', ')}`);

const deanOffice = new DeanOffice();

console.log('\n--- Виконуємо відрахування ---');
deanOffice.run(new ExpelCommand(studentList, 'Сидоренко'));
console.log(`Список після відрахування: ${studentList.getAll().join(', ')}`);

console.log('\n--- Скасовуємо останню дію ---');
deanOffice.undoLast();
console.log(`Список після скасування: ${studentList.getAll().join(', ')}`);