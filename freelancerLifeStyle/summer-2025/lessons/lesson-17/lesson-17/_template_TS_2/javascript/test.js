"use strict";
class Test {
    constructor(val) {
        this.field2 = val;
    }
    toString() {
        return `${Test.field1} - ${this.field2}`;
    }
}
(() => {
    Test.field1 = 900;
})();
const t1 = new Test(22);
document.write(t1.toString());
