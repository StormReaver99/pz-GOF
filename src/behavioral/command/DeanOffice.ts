import { Command } from './interface';

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