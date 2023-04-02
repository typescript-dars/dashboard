export class Id {
  static id: number = 1;
  static getId(): number {
    return this.id++;
  }
}
