import { LectureCourseFactory, LabCourseFactory } from '../src/creational/factory-method/CourseFactory';

console.log('=== FACTORY METHOD — Створення курсів ===');
const lectureFactory = new LectureCourseFactory('Шевченко О.М.');
const labFactory = new LabCourseFactory(8);

console.log(lectureFactory.createCourse('CS101', 'Алгоритми').describe());
console.log(labFactory.createCourse('CS102', 'Програмування').describe());