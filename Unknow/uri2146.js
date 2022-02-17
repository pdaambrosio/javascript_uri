const input = require('fs').readFileSync('./JavaScript-Uri/Unknow/stdin', 'utf8');
const values = input.split('\n').map(value => parseInt(value));

while (values.length !== 0) {
    const N = values.shift();
    
    if (isNaN(N)) {
        break;
    }

    console.log(N - 1);
}
