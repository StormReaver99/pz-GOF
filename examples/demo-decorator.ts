import { BasicCourse, OnlineDecorator, TestDecorator } from '../src/structural/decorator/CourseDecorator';

console.log('=== DECORATOR — Розширення курсу ===');
const base = new BasicCourse('Вища математика', 4);
const withOnline = new OnlineDecorator(base);
const withTest = new TestDecorator(withOnline);

console.log(`Базовий: ${base.getDescription()} (${base.getCredits()} кред.)`);
console.log(`З онлайном: ${withOnline.getDescription()} (${withOnline.getCredits()} кред.)`);
console.log(`З онлайном і тестом: ${withTest.getDescription()} (${withTest.getCredits()} кред.)`);