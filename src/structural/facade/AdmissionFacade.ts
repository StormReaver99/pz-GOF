// Facade — вступна кампанія має кілька кроків.
// Фасад ховає всю цю складність за одним методом.

class DocumentChecker {
  check(name: string): boolean {
    console.log(`  Перевірка документів: ${name} — OK`);
    return true;
  }
}

class ExamSystem {
  evaluate(name: string, score: number): boolean {
    const passed = score >= 150;
    console.log(`  Іспит: ${name} — ${score} балів — ${passed ? 'складено' : 'не складено'}`);
    return passed;
  }
}

class DormitorySystem {
  assign(name: string): void {
    console.log(`  Гуртожиток: кімната виділена для ${name}`);
  }
}

export class AdmissionFacade {
  private docs = new DocumentChecker();
  private exam = new ExamSystem();
  private dorm = new DormitorySystem();

  apply(name: string, score: number): boolean {
    if (!this.docs.check(name)) return false;
    if (!this.exam.evaluate(name, score)) return false;
    this.dorm.assign(name);
    console.log(`  Результат: ${name} зарахований!`);
    return true;
  }
}