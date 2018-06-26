let {formatNumber} = require('../src/main');
describe("收银机--打折", function () {
    it("条码数量格式化", function () {
        let items = [
            'ITEM000001',
            'ITEM000001',
            'ITEM000003-2'
        ];
        let expected = [{barcode: 'ITEM000001', count: 1},
            {barcode: 'ITEM000001', count: 1},
            {barcode: 'ITEM000003', count: 2}];
        expect(formatNumber(items)).toEqual(expected);
    });
    it("条码数量格式化", function () {
        let items = [
            'ITEM000004',
            'ITEM000005',
            'ITEM000001-3'
        ];
        let expected = [{barcode: 'ITEM000004', count: 1},
            {barcode: 'ITEM000005', count: 1},
            {barcode: 'ITEM000001', count: 3}];
        expect(formatNumber(items)).toEqual(expected);
    });
});