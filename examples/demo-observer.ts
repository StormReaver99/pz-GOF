import { Dean, Student } from '../src/behavioral/observer/NotificationSystem';

console.log('=== OBSERVER — Сповіщення студентів ===');
const dean = new Dean();
const s1 = new Student('Іваненко');
const s2 = new Student('Петренко');

dean.subscribe(s1);
dean.subscribe(s2);
dean.notify("Екзамен перенесено на п'ятницю!");

dean.unsubscribe(s2);
console.log('\n(Петренко відписався від новин)');
dean.notify('Консультація завтра о 10:00');