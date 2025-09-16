"use strict";
class Rectangle {
    constructor(initialWidth, initialHeight) {
        this._width = 0;
        this._height = 0;
        this.Width = initialWidth;
        this.Height = initialHeight;
    }
    checkSideValidity(val) {
        if (val < 0)
            throw new Error('Side is incorrect');
    }
    //--- width
    get Width() {
        return this._width;
    }
    set Width(v) {
        this.checkSideValidity(v);
        this._width = v;
    }
    //--- height
    get Height() {
        return this._height;
    }
    set Height(v) {
        this.checkSideValidity(v);
        this._height = v;
    }
    //----
    get Area() {
        return this.Height * this.Width;
    }
    get Perimeter() {
        return 2 * (this.Height + this.Width);
    }
    toString() {
        return `${this.Width} * ${this.Height}`;
    }
}
//-----
const r1 = new Rectangle(12, 22);
console.log(r1.Area);
document.write(r1.toString());
