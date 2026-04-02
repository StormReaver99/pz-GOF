import { UniversityRegistry } from '../src/creational/singleton/UniversityRegistry';

console.log('=== SINGLETON — Реєстр університету ===');
const registry = UniversityRegistry.getInstance();
registry.enroll('Іваненко', 1);
registry.enroll('Петренко', 2);

const sameRegistry = UniversityRegistry.getInstance();
console.log(`Студентів у реєстрі: ${sameRegistry.count()}`);
sameRegistry.getAll().forEach(s => console.log(`  ${s.id} — ${s.name}, ${s.year} курс`));
console.log(`Чи це один і той самий об'єкт? ${registry === sameRegistry}`);