let I = 1;
let J = 7;

while (I <= 9) {
    while (J >= 5) {
        console.log(`I=${I} J=${J}`);
        J -= 1;
    }
    I += 2;
    J = 7;
}