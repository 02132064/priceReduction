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

function getNoRepeat(barcode, goods) {
    for (let good of goods) {
        if (barcode === good.barcode) {
            return good;
        }
    }
    return null;
}

function getCount(items) {
    let result = [items[0]];
    for (let i = 1; i < items.length; i++) {
        let countItem = getNoRepeat(items[i].barcode, result);
        if (countItem === null) {
            result.push({
                    barcode: items[i].barcode,
                    count: items[i].count
                }
            );
        } else {
            countItem.count += items[i].count;
        }
    }
    return result;
}

// console.log(getCount([{barcode: 'ITEM000001', count: 1},
//     {barcode: 'ITEM000001', count: 3},
//     {barcode: 'ITEM000001', count: 1},
//     {barcode: 'ITEM000001', count: 1}
// ]));
module.exports = {formatNumber, getCount};