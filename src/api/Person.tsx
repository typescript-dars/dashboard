import { Id } from "./Id";

export interface IPerson {
  id: number;
  fullname: string;
  file: string;
  date: string;
  number: string;
}

export class Person implements IPerson {
  id: number;
  fullname: string;
  file: string;
  date: string;
  number: string;
  constructor(fullname: string, file: string, date: string, number: string) {
    this.id = Id.getId();
    this.fullname = fullname;
    this.file = file;
    this.date = date;
    this.number = number;
  }
}
