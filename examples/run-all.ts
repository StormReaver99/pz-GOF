import { UniversityRegistry } from '../src/creational/singleton/UniversityRegistry';
import { LectureCourseFactory, LabCourseFactory } from '../src/creational/factory-method/CourseFactory';
import { ScheduleBuilder } from '../src/creational/builder/ScheduleBuilder';
import { OldGradeBook, GradeAdapter } from '../src/structural/adapter/GradeAdapter';
import { AdmissionFacade } from '../src/structural/facade/AdmissionFacade';
import { BasicCourse, OnlineDecorator, TestDecorator } from '../src/structural/decorator/CourseDecorator';
import { Dean, Student } from '../src/behavioral/observer/NotificationSystem';
import { StudentGpa, SimpleGpa, WeightedGpa } from '../src/behavioral/strategy/GpaStrategy';
import { StudentList, ExpelCommand, DeanOffice } from '../src/behavioral/command/DeanCommand';

console.log('=== 1. SINGLETON — Реєстр університету ===');
const registry = UniversityRegistry.getInstance();
registry.enroll('Іваненко', 1);
registry.enroll('Петренко', 2);
// Перевіряємо що це один і той самий екземпляр
const sameRegistry = UniversityRegistry.getInstance();
console.log(`Студентів у реєстрі: ${sameRegistry.count()}`);
sameRegistry.getAll().forEach(s => console.log(`  ${s.id} — ${s.name}, ${s.year} курс`));

console.log('\n=== 2. FACTORY METHOD — Створення курсів ===');
const lectureFactory = new LectureCourseFactory('Шевченко О.М.');
const labFactory = new LabCourseFactory(8);
const course1 = lectureFactory.createCourse('CS101', 'Алгоритми');
const course2 = labFactory.createCourse('CS102', 'Програмування');
console.log(course1.describe());
console.log(course2.describe());

console.log('\n=== 3. BUILDER — Складання розкладу ===');
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

console.log('\n=== 4. ADAPTER — Конвертація оцінок ===');
const oldBook = new OldGradeBook();
const adapter = new GradeAdapter(oldBook);
adapter.setLetterGrade('STU-1', 'A');
adapter.setLetterGrade('STU-2', 'C');
console.log(`STU-1: літерна=${adapter.getLetterGrade('STU-1')}, числова=${oldBook.getGrade('STU-1')}`);
console.log(`STU-2: літерна=${adapter.getLetterGrade('STU-2')}, числова=${oldBook.getGrade('STU-2')}`);

console.log('\n=== 5. FACADE — Вступна кампанія ===');
const admission = new AdmissionFacade();
admission.apply('Коваленко', 190);
console.log('---');
admission.apply('Бойко', 120);

console.log('\n=== 6. DECORATOR — Розширення курсу ===');
const base = new BasicCourse('Вища математика', 4);
const withOnline = new OnlineDecorator(base);
const withTest = new TestDecorator(withOnline);
console.log(`Базовий: ${base.getDescription()} (${base.getCredits()} кред.)`);
console.log(`З онлайном: ${withOnline.getDescription()} (${withOnline.getCredits()} кред.)`);
console.log(`З онлайном і тестом: ${withTest.getDescription()} (${withTest.getCredits()} кред.)`);

console.log('\n=== 7. OBSERVER — Сповіщення студентів ===');
const dean = new Dean();
const s1 = new Student('Іваненко');
const s2 = new Student('Петренко');
const s3 = new Student('Коваленко');
dean.subscribe(s1);
dean.subscribe(s2);
dean.subscribe(s3);
dean.notify("Екзамен перенесено на п'ятницю!");
dean.unsubscribe(s2);
console.log('  (Петренко відписався)');
dean.notify('Консультація завтра о 10:00');

console.log('\n=== 8. STRATEGY — Підрахунок GPA ===');
const studentGpa = new StudentGpa(new SimpleGpa());
const grades = [4, 3, 5, 4];
console.log(`Оцінки: ${grades.join(', ')}`);
console.log(`Простий GPA: ${studentGpa.getGpa(grades)}`);
studentGpa.setStrategy(new WeightedGpa([1, 1, 3, 1]));
console.log(`Зважений GPA (іспит x3): ${studentGpa.getGpa(grades)}`);

console.log('\n=== 9. COMMAND — Дії деканату ===');
const studentList = new StudentList();
studentList.add('Сидоренко');
studentList.add('Мороз');
console.log(`Список: ${studentList.getAll().join(', ')}`);
const deanOffice = new DeanOffice();
deanOffice.run(new ExpelCommand(studentList, 'Сидоренко'));
console.log(`Після відрахування: ${studentList.getAll().join(', ')}`);
deanOffice.undoLast();
console.log(`Після скасування: ${studentList.getAll().join(', ')}`);