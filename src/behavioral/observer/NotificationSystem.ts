// Observer — студенти підписуються на сповіщення від деканату.
// Деканат надсилає повідомлення — всі підписані отримують автоматично.

export interface Observer {
  update(message: string): void;
}

export class Dean {
  private subscribers: Observer[] = [];

  subscribe(observer: Observer): void {
    this.subscribers.push(observer);
  }

  unsubscribe(observer: Observer): void {
    this.subscribers = this.subscribers.filter(s => s !== observer);
  }

  notify(message: string): void {
    this.subscribers.forEach(s => s.update(message));
  }
}

export class Student implements Observer {
  constructor(public name: string) {}

  update(message: string): void {
    console.log(`  ${this.name} отримав: ${message}`);
  }
}