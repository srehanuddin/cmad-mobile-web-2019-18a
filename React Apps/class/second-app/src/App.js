import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';



class App extends React.Component {
  constructor(){
    super()
    this.state = {
      counter : 0
    }

    setInterval( ()=> {
      this.state.counter++
    }, 500)
  }

  c = "karachi"

  add(a, b){
    return a * b
  }

  render(){
    var a = "Pakistan"
    var b = "Pakistan"
    var d = [2,3,4,5]
    var users = [{id : 1, name : "Ali", age : 25}, {id : 2, name : "Amir", age : 20}]

    

    return(
      <div className="App">
        <Header />
        <h2 className="heading">Hello World!</h2>
        <h2 className="heading">{a + b}</h2>
        <h2 className="heading">{this.c}</h2>
        <h2 className="heading">{this.add(5,6)}</h2>
        <div>{d.map(x => <ul><li>{x}</li></ul>)}</div>

        <ul>{users.map(x => {
          return (<li>{x.id}, {x.name}, {x.age}</li>)
        })}
        </ul>

        <h2 className="heading">{this.state.counter}</h2>

        <Header />
        {2*2}
      </div>
    )
  }
} 

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
