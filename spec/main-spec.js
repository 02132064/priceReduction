let {formatNumber} = require('../src/main');
describe("收银机--打折", function () {
    it("条码数量格式化", function () {
        let items = [
            'ITEM000001',
            'ITEM000001',
            'ITEM000003-2',
            'ITEM000005',
            'ITEM000004'
        ];
        let expected = [
            'ITEM000001',
            'ITEM000001',
            'ITEM000003',
            'ITEM000003',
            'ITEM000005',
            'ITEM000004'
        ];
        expect(formatNumber(items)).toBe(expected);
    });

});