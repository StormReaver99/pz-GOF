// Command — дії деканату оформлені як об'єкти.
// Можна скасовувати останню дію через undo.

export interface Command {
  execute(): void;
  undo(): void;
}

export class StudentList {
  private students: string[] = [];

  add(name: string): void {
    this.students.push(name);
  }

  remove(name: string): void {
    this.students = this.students.filter(s => s !== name);
  }

  getAll(): string[] {
    return [...this.students];
  }
}

export class ExpelCommand implements Command {
  constructor(private list: StudentList, private studentName: string) {}

  execute(): void {
    this.list.remove(this.studentName);
    console.log(`  Відраховано: ${this.studentName}`);
  }

  undo(): void {
    this.list.add(this.studentName);
    console.log(`  Поновлено: ${this.studentName}`);
  }
}

export class DeanOffice {
  private history: Command[] = [];

  run(command: Command): void {
    command.execute();
    this.history.push(command);
  }

  undoLast(): void {
    const command = this.history.pop();
    if (command) command.undo();
  }
}