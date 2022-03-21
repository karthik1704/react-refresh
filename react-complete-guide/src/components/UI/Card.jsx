import "./Card.css";
// children property is special property allows custom component have jsx elements and custom jsx
// children prop react include with every props
const Card = ({ className, children }) => {
  // className not supported to custom component , so we get className as props and append to here as className
  const classes = "card " + className;
  return <div className={classes}>{children}</div>;
};

export default Card;
