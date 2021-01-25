import React from "react";

const MyFirstComponent = (props) => {
  const { myFirstProperty = true, name = "Beng" } = props;

  let text = "Hello";

  if (myFirstProperty) {
    text = "Goodbye";
  }

  return (
    <h1>
      {text} {name}
    </h1>
  );
};

export default MyFirstComponent;
