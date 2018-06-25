let {hello} = require('../src/main');
describe("求和", function () {
    it("求和函数", function () {
        var a = 2;
        var b = 3;
        var excepted = 5;
        expect(hello(a, b)).toBe(excepted);
    });
});