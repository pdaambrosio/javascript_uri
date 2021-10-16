let S = 0;
let Y = 0;

for (let i = 1; i <= 40; i += 2) {
    S += i / Math.pow(2, Y);
    Y += 1;
}

console.log(S.toFixed(2))
