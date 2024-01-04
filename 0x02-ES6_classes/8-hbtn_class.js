export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(value) {
    this._size = value;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    this._location = value;
  }

  [Symbol.toPrimitive](val) {
    if (val === 'number') {
      return this.size;
    }
    if (val === 'string') {
      return this.location;
    }
    return this;
  }
}
