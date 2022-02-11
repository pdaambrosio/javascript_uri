const input = require('fs').readFileSync('./JavaScript-Uri/Ad-Hoc/stdin', 'utf8');
const values = input.split(/\s+/).map(value => parseInt(value));

function twoBills(buyPrice, pricePaid) {
    const bills = [2, 5, 10, 20, 50, 100];
    const theChange = pricePaid - buyPrice;
    let result = false;

    for (let i = 0; i < bills.length; i++) {
        for (let n = 0; n < bills.length; n++) {
            if (bills[i] + bills[n] === theChange) {
                result = true;
                break;
            }
        }
    }
    return result;
}


while (values.length !== 0) {
    const [N, M] = values.splice(0, 2);
    
    if (N === 0 || M === 0) {
        break;
    }

    if (twoBills(N, M)) {
        console.log('possible');
    } else {
        console.log('impossible');
    }
}
