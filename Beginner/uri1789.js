const input = require('fs').readFileSync('./JavaScript-Uri/Beginner/stdin', 'utf8');
const values = input.split(/\s+/).map(value => parseInt(value));
const loop = 0;

while (loop != values) {
    const numberSlugs = values.shift();
    // const slugGroup = values.slice(0, numberSlugs).map(value => values.shift());
    const slugGroup = [];

    let fastSlug = 0;

    for (let i = 0; i < numberSlugs; i++) {
        slugGroup.push(values.shift());

        if (slugGroup[i] > fastSlug) {
            fastSlug = slugGroup[i]
        }
    }

    if (fastSlug < 10) {
        console.log(1);
    } else if (fastSlug >= 10 && fastSlug < 20) {
        console.log(2);
    } else {
        console.log(3);
    }
}

// The was an error "Time limit exceeded"
// Under analyzing
