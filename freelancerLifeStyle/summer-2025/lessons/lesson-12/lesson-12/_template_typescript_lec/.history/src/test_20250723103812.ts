const a: number = 90
const r: string = 'ok'

let s: string | null = a + r
document.write(s)

s = null

let d: unknown

d = 12321
if (typeof d === 'string') document.write(d.toUpperCase())
