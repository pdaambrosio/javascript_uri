const input =  require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const N = parseInt(input);

for (let i = 1; i <= N; i++) {
    if (N %i === 0) {
        console.log(i);
    }
}
