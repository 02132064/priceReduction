function formatNumber(items) {
    let items = [{
        barcode: barcode,
        count: count
    }];
    return items.map(function (i) {
        if (i.indexOf("-")) {
            return {
                barcode: i,
                count: i.indexOf("-")
            }
        }else{

        }
    })
}

module.exports = {formatNumber};