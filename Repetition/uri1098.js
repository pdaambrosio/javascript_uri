let I = 0;
let J = 1;

while (I <= 2) {
    for (let l = 0; l < 3; l++) {
        if (I > 2.19) {
            console.log(`I=2 J=${J.toFixed(0)}`);
        } else if (I === 1.0 || I === 0.0 || I > 1.8) {
            console.log(`I=${I.toFixed(0)} J=${J.toFixed(0)}`);
        } else {
            console.log(`I=${I.toFixed(1)} J=${J.toFixed(1)}`);
        }
        J += 1;
    }
    I += 0.2;
    J = I + 1;
}
