const input = require('fs').readFileSync('./JavaScript-Uri/Selection/stdin', 'utf8');
const [isVertebrate, classification, foodChain] = input.split('\n');

const vertebrate = {'vertebrado': {'ave': {'carnivoro': 'aguia', 'onivoro': 'pomba'}, 'mamifero': {'onivoro': 'homem', 'herbivoro': 'vaca'}}};
const invertebrate = {'invertebrado': {'inseto': {'hematofago': 'pulga', 'herbivoro': 'lagarta'}, 'anelideo': {'hematofago': 'sanguessuga', 'onivoro': 'minhoca'}}};

if (isVertebrate in vertebrate) {
    for (let value of Object.values(vertebrate)) {
        for (let [category, chain] of Object.entries(value)) {
            if (classification === category) {
                for (let [key, type] of Object.entries(chain)) {
                    if (foodChain === key) {
                        console.log(type);
                    }
                }
            }
        }
    }
} else if (isVertebrate in invertebrate) {
    for (let value of Object.values(invertebrate)) {
        for (let [category, chain] of Object.entries(value)) {
            if (classification === category) {
                for (let [key, type] of Object.entries(chain)) {
                    if (foodChain === key) {
                        console.log(type);
                    }
                }
            }
        }
    }
}
