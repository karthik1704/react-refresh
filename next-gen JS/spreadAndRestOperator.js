// ... (3dot is spread and rest operator)
// spread used to split up array elements or object properties
// rest used to merge list of function arguments into an array

// Spread
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 7];

console.log(newNumbers);

const person = {
  name: "karthi",
};

const newPerson = {
  ...person,
  age: 26,
};

// Rest
const filterFunc = (...args) => args.filter((el) => el === 1);

console.log(filterFunc(1,3,4,5));