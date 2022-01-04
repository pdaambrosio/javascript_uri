const input = require('fs').readFileSync('./JavaScript-Uri/Simulation/stdin', 'utf8');
const values = input.split(/\s+/).map(value => parseInt(value));
const numberStars = values.shift();
const numberSheeps = values.splice(0, numberStars);

const starTrek = () => {
    
}
