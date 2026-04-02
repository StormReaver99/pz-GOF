import { Command } from './interface';
import { StudentList } from './StudentList';

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