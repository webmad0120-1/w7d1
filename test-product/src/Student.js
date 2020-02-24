import React, { Component } from "react";
import "./App.css";

class Student extends Component {

  render() {
    const formatName = (user) => {
      return `${user.firstName} ${user.lastName}`;
    }
   
    const user = {
      firstName: 'Harper',
      lastName: 'Perez',
      avatarUrl: ''
    };
    
    const element = (
      <h2>
        Hello, {formatName(user)}!
      </h2>
    );

    const welcome = <h3>Hola</h3>

    const element2 = (
        <div>
          <h1>Hello Ironhacker!</h1>
          <h2>Good to see you here. {welcome}</h2>
        </div>
      );
 
    return (
      <div className="App">
        <h1> Hello Ironhackers! </h1>
        {element2}
      </div>
    );
  }
}

export default Student;