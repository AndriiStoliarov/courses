class Test {
  static field1: number
  static {
    Test.field1 = 900
  }

  field2: number
  constructor(val: number) {
    this.field2 = val
  }
  toString() {
    return `${Test.field1} - ${this.field2}`
  }
}

const t1 = new Test(22)
document.write(t1.toString())
