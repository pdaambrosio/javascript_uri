const input = require('fs').readFileSync('./JavaScript-Uri/Ad-Hoc/stdin', 'utf8');

const twitting = (tweet) => {
    if (tweet.length > 140) {
        return 'MUTE';
    }
    return 'TWEET';
};

console.log(twitting(input));
