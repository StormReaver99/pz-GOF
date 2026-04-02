import { AdmissionFacade } from '../src/structural/facade/AdmissionFacade';

console.log('=== FACADE — Вступна кампанія ===');
const admission = new AdmissionFacade();

console.log('Абітурієнт 1: Коваленко (190 балів)');
admission.apply('Коваленко', 190);

console.log('\nАбітурієнт 2: Бойко (120 балів)');
admission.apply('Бойко', 120);