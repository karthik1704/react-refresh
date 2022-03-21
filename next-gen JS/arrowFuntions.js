// Normal Funtion

function myFunc() {
  console.log("i'm normal js function");
}

// Arrow Fuction
// Arrow Fuction solve 'this' keyword issues
const myArrowFunc = () => {
  console.log("I'm Arrow Functions");
};

// single-line Arrow func - if arrow funtions returns value

const singleLineArrowFunc = () => 1 + 1;

// single parameter, don't need ()

const singleParameter = name => `Hi ${name}`;

// multiple parameter, need ()

const multoParameter = (name, age) => `Hi ${name} and ${age}`;

// no parameter also need ()

const noParams = () => "Hi karthi";
