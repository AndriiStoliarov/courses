class Rectangle {
  private _width: number = 0
  private _height: number = 0
  constructor(initialWidth: number, initialHeight: number) {
    this.Width = initialWidth
    this.Height = initialHeight
  }

  checkSideValidity(val: number) {
    if (val < 0) throw new Error('Side is incorrect')
  }

  //--- width
  public get Width(): number {
    return this._width
  }

  public set Width(v: number) {
    this.checkSideValidity(v)
    this._width = v
  }
  //--- height

  public get Height(): number {
    return this._height
  }

  public set Height(v: number) {
    this.checkSideValidity(v)
    this._height = v
  }

  //----
  public get Area(): number {
    return this.Height * this.Width
  }

  public get Perimeter(): number {
    return 2 * (this.Height + this.Width)
  }

  public toString(): string {
    return `${this.Width} * ${this.Height}`
  }
}
//-----
const r1 = new Rectangle(12, 22)
console.log(r1.Area)

document.write(r1.toString())
