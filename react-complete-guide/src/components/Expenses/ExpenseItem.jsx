import React , {useState} from 'react';
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"; // Importing CSS

// React componet functin name must be start with Uppercase(Pascal case), otherwise not work
// you can get custom attributes/property as props arg in your custom component
// props is object , so you can use object destructuring too
const ExpenseItem = ({  amount, date ,...props}) => {
  // creating state with react hook useState
  // all hooks start with use , like (useState, useEffect)
  // useState required inital state value
  // it's returns array - contains 0th element is value , 1th element
  // is spl funtion that set state value immutable way
  // you can't directly mutate state value, only with spl function
  const [title, setTitle]=useState(props.title);

  const clickHandler = ()=>{
    setTitle('Updated!');
    console.log(title);
   
  }
 
  //jsx must be in single parent/root element , <div> or fragments <></>
  // there is no class attribute for styling , insted of use className (because it's js and class is keyword in JS)
  // all html attributes  in React is camelCase (onclick -> onClick)
  return (
    // custom component doesn't support className , only jsx element (html elements) support
    <Card className="expense-item">
      {/* 
        You can add normal JS to JSX with single curly braces {}
        anything between {} run js, variable , function and expression
      */}
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">₹{amount}</div>
      </div>
      <button onClick={clickHandler}>change title</button>
    </Card>
  );
};

export default ExpenseItem;
