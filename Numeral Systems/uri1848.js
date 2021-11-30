const input = require('fs').readFileSync('./JavaScript-Uri/Numeral Systems/stdin', 'utf8');
const values = input.split('\n');

function threeEyedLottery(crowPrediction) {
    for (let i = 0; i < 3; i++) {
        let crowStream = 0;
        let sumBlink = 0;
    
        while (crowStream !== 3) {
            let crowBlink = crowPrediction.shift();
    
            if (crowBlink != 'caw caw') {
                crowBlink = crowBlink.replace(/-/g, '0');
                crowBlink = crowBlink.replace(/\*/g, '1');
                sumBlink += parseInt(crowBlink, 2);
            } else {
                crowStream += 1;
                console.log(sumBlink);
                break;
            }
        }
    }
}

threeEyedLottery(values);
