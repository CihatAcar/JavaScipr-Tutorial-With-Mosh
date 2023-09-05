// This is part of Referent Types.
let person = {
    name: "John",
    age: 28
}
console.log(person);

// Dot Notation
person.name = "Johnny";
console.log(person.name);

//Bracket Notation
person['name'] = 'Joe';
console.log(person.name)

let selection = 'name';
person[selection] = 'Mary'
console.log(person.name);
