import React from 'react';

const person = (props) => {
  return (
    <div>
    <p>We are a robots {props.name}~~<br/>{props.age} years old~!</p>
    <p>{props.children}</p> 
    </div>
  );
}


export default person;
