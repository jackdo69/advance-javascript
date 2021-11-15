/**
 * Function that works for base type should work
 * for derived type
 */

class Rectangle {
  private _width: number;
  private _height: number;
  constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
  }
  getArea() {
    return this.width * this.height;
  }

  set width(val) {
    this._width = val;
  }

  get width() {
    return this._width;
  }

  set height(val) {
    this._height = val;
  }

  get height() {
    return this._height;
  }
}

//incorrect
class SquareI extends Rectangle {
  constructor(size) {
    super(size, size);
  }
}
const foo = new SquareI(5);
console.log(foo.getArea()); // 25
foo.width = 3;
console.log(foo.getArea()); // 15 because the height is 5

//correct
class SquareC extends Rectangle {
  private _size: number;
  constructor(size: number) {
    super(size, size);
  }
  set size(val: number) {
    super.width = val;
    super.height = val;
  }
}

const baz = new SquareC(5);
baz.size = 3;
console.log(baz.getArea()); // 9

export default {};
