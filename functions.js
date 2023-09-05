// This function performing a task
function greet(name, lastName) {
    console.log("Hello " + name + " " + lastName + "!");
}

greet("John", "Smith"); // Hello John Smith!
greet("Johnny") // Hello Johnny undefined!


// This function calculating a value
function square(number) {
    return number * number
}

console.log(square(4)); // 16
let number = square(2);
console.log(number); // 4
