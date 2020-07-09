var arr = [2, 5, 8, 10];
console.log(arr.includes(5));

const belowThreshold = (curr) => curr < 50;
console.log(arr.every(belowThreshold));

const result = arr.filter((curr) => curr < 6);
console.log(result);

const result2 = arr.find((curr) => curr < 6);
console.log(result2);

console.log(arr.join(''));

const result3 = arr.map((curr) => curr + 3);
console.log(result3);

const reducer = (acc, curr) => acc + curr;
console.log(arr.reduce(reducer));

const firstEle = arr.shift();
console.log(firstEle);

const result4 = arr.slice(1,2);
console.log(result4);

const evenTest = (curr) => curr % 2 == 0;
console.log(arr.some(evenTest));

console.log(arr.unshift(2));
console.log(arr);