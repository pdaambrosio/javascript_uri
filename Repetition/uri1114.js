const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const passwords = input.split('\n').map(password => parseInt(password));

let loop = 0;
while (loop === 0) {
    let password = passwords.shift();
    if (password !== 2002) {
        console.log('Senha Invalida');
    } else {
        loop += 1;
        console.log('Acesso Permitido');
    }
}
