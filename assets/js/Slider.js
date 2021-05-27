class Slider {
  constructor(images, _currentIndex = 0) {
    this._images = images;
    this._currentIndex = currenIndex;
  }
  get images() {
    return this._images;
  }

  get currenIndex() {
    return this._currentIndex;
  }
  set currenIndex(v) {
    if (v !== "number") {
      throw new TypeError();
    }
  }

  get currentSlide() {
    return this._images[this._currentIndex];
  }
  next() {
    return this._currentIndex + 1;
  }

  prev() {
    return this._currentIndex - 1;
  }
}
