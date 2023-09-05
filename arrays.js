let selectedColors = ["red", "blue"]; // Array Literal
console.log(selectedColors); // ["red", "blue"]
console.log(selectedColors[0]); // red
selectedColors[2] = "green";
console.log(selectedColors); // ["red", "blue", "green"]

// We can store different type of elements in one array
selectedColors[3] = 1;
console.log(selectedColors); // ["red", "blue", "green", 1]
console.log(selectedColors.length) // 4
