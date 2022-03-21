// class defined by class keyword, class is blueprint
// class contains property and method
// method is funtions
// property is variables
// support inheritance
// class are convinded way to create constructor funtions

class Human {
  constructor() {
    this.gender = "male";
  }
  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor(name) {
    super(); // if extend to other class and having constructor need to super()
    this.name = name;
  }
  printMyName() {
    console.log(this.name);
  }
}

const myPerson = new Person("karthi");
myPerson.printMyName();
myPerson.printGender();
console.log(myPerson.name);

// Modern Class - ES7
// ES7 support to omit constructor
// new way to write methods
// this way we can't find headache with 'this' keyword
class MPerson {
  name = "karthi A";

  myMethod = () => {
    console.log("Modern Hi");
  };
}

class ModernHuman {
  gender = "male";

  printGender = () => {
    console.log(this.gender);
  };
}

class ModernPerson extends ModernHuman {
  name = this.name;

  printMyName = () => {
    console.log(this.name);
  };
}

const myMPerson = new ModernPerson("karthi");
myPerson.printMyName();
myPerson.printGender();
console.log(myPerson.name);
