// Primitive types -> numbers, boolean, string,

const number = 1; // Primitive type
const num1 = number; //  number value copied to num1

// Rederence types -> objects, arrys

const person = {
  name: "Karthi",
}; // Reference type, only memory pointer address stored in person

const secondPerson = person; // here value not copied, it's referance memory address copied to second person

person.name = "karthik";

console.log(secondPerson);

const secondPerson1 = {
    ...person
}; // it's create new object with spreading person

console.log(secondPerson1);

