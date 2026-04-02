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