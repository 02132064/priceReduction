function formatNumber(items) {
    return items.map(function (i) {
        if (i.indexOf("-") !== -1) {
            return {
                barcode: i.split('-')[0],
                count: parseInt(i.split('-')[1])
            }
        } else {
            return {
                barcode: i,
                count: 1
            }
        }
    });
}

function getCount() {

}

console.log(formatNumber([
    'ITEM000001',
    'ITEM000001',
    'ITEM000003-2'
]));
module.exports = {formatNumber, getCount};