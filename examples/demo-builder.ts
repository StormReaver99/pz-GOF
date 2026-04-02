import { ScheduleBuilder } from '../src/creational/builder/ScheduleBuilder';

console.log('=== BUILDER — Складання розкладу ===');
const schedule = new ScheduleBuilder()
  .setName('Осінній семестр 2024')
  .setSemester(1)
  .addCourse('CS101')
  .addCourse('CS102')
  .setRoom('А-305')
  .build();

console.log(`Розклад: ${schedule.name}, семестр ${schedule.semester}`);
console.log(`Аудиторія: ${schedule.room}`);
console.log(`Курси: ${schedule.courses.join(', ')}`);