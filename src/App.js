import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloName from './HelloName'

class App extends Component {
  render() {

    const fluffyBunnies = 'Alex'

    const names = [fluffyBunnies, 'Brent', 'Kendra', 'Emmett', 'Aria']

    const myObject = {
      username: 'Alex',
      email: `Alex@live.net`,
      picture: `http://archives.siliconvalleydebug.org/articles/2013/07/02/nelson-mandela-dying`,
      name: {
        first: 'Alex',
        last: 'Lenzen'
      }
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React {myObject.name.first} {myObject.name.last}</h1>
        </header>
        <div>
          <p>username: {myObject.username}</p>
          <p>name: {myObject.name.first} {myObject.name.last}</p>
          <p>email: {myObject.email}</p>
          <p>profile picture: <img src="http://media.siliconvalleydebug.org/media/thumbs/images/2013/july/nelson-mandela-009_large.jpeg" height="40"  width="40" /></p>
        </div>
        <div className="Name-Container">
          {
            names.map((name, index) => {
              return (
                <HelloName
                  key={index}
                  name={name}
                />
            )})
          }
        </div>
      </div>
    );
  }
}

export default App;
