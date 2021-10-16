const numbers = []
for (let i = 0; i < 20; i++) {
    numbers[i] = Math.floor(Math.random() * 100);
}
console.log(numbers);

for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[j] < numbers[i]){
            var t = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = t;
        }        
    }
}
console.log(numbers);
