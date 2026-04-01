// Decorator — додає можливості до курсу без зміни його класу.
// Можна комбінувати: онлайн + тест + що завгодно.

export interface Course {
  getDescription(): string;
  getCredits(): number;
}

export class BasicCourse implements Course {
  constructor(private title: string, private credits: number) {}

  getDescription(): string {
    return this.title;
  }

  getCredits(): number {
    return this.credits;
  }
}

export class OnlineDecorator implements Course {
  constructor(private course: Course) {}

  getDescription(): string {
    return this.course.getDescription() + ' + онлайн-трансляція';
  }

  getCredits(): number {
    return this.course.getCredits();
  }
}

export class TestDecorator implements Course {
  constructor(private course: Course) {}

  getDescription(): string {
    return this.course.getDescription() + ' + тестування';
  }

  getCredits(): number {
    return this.course.getCredits() + 1;
  }
}