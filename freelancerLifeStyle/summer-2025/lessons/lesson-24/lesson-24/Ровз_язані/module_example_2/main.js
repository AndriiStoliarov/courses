const ans = prompt('1) sum \n 2)product')
let module
if (ans === '1') module = await import('./sum_module.js')
else module = await import('./product_module.js')

console.log(module.default(module.var1, 5))
