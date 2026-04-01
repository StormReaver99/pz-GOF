// Builder — складає розклад крок за кроком.
// Без патерну: конструктор з купою параметрів, незрозуміло що куди передавати.

export interface Schedule {
  name: string;
  semester: number;
  courses: string[];
  room: string;
  isRemote: boolean;
}

export class ScheduleBuilder {
  private schedule: Schedule = {
    name: '',
    semester: 1,
    courses: [],
    room: '',
    isRemote: false,
  };

  setName(name: string): this {
    this.schedule.name = name;
    return this;
  }

  setSemester(s: number): this {
    this.schedule.semester = s;
    return this;
  }

  addCourse(code: string): this {
    this.schedule.courses.push(code);
    return this;
  }

  setRoom(room: string): this {
    this.schedule.room = room;
    return this;
  }

  setRemote(val: boolean): this {
    this.schedule.isRemote = val;
    return this;
  }

  build(): Schedule {
    if (!this.schedule.name) throw new Error("Назва обов'язкова");
    if (this.schedule.courses.length === 0) throw new Error('Додай хоча б один курс');
    return { ...this.schedule };
  }
}