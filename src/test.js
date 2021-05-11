class Circle {
  constructor() {
    this.radius = 102;
    this.arr = [];
  }

  dog() {
    throw new Error('dfs')
    return 'woof!'
  }
  cat() {
    this.arr.push('cat')
  }
}
