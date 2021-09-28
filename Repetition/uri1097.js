let I = 1;
let J = 7;

while (I <= 9) {
    for (let l = 0; l < 3; l++) {
        console.log(`I=${I} J=${J}`);
        J -= 1;
    }
    I += 2;
    J += 5;
}