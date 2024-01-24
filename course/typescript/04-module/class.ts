class MyClass {
  constructor(protected p1: string, protected p2: number) {}
}

class Second extends MyClass {
  constructor(num1: string, num2: number) {
    super(num1, num2);
  }
  show(): void {
    console.log(this.p1, this.p2);
  }
}
const cls2 = new Second("Tim", 27);
cls2.show()
