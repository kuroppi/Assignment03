let coinFlip;
let num = parseFloat(prompt('How many times do you want to flip the coin?'));

for (let i = 1; i <= num; i++) {
    coinFlip = Math.round(Math.random());
    if (coinFlip === 0) {
        console.log("Heads");
    } else if (coinFlip === 1) {
        console.log("Tails");
    }
}