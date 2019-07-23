import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store';
import {connect} from 'react-redux'


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos : [],
      counter : null
    }

    setInterval(() => {
      this.props.increment()
    },1000)

    console.log(store)
    
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        // console.log(json)
        this.setState({
          todos : json
        })
      })
  }

  componentDidMount(){
    store.subscribe(() => {
      console.log("App Component",store.getState())
      this.setState({
        counter : store.getState().counter
      }) 
    })
    store.dispatch({ type: 'INCREMENT' })
  }

  render(){
    return (
      <div className="App">
      <h2>{this.state.counter}</h2>
        {/* {this.state.todos.map((data) => {
          return <div>{data.title}</div>
        }
      )} */}
        {/* <Home /> */}
      </div>
    );
  }
}

function increment () {
  return { type: 'INCREMENT' }
}

function decrement () {
  return { type: 'DECREMENT' }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = { increment, decrement }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

// export default App;

// class Home extends React.Component{
//   constructor(){
//     super();
//     // console.log("Constructor")
//   }

//   componentWillMount(){
//     // console.log('componentWillMount')
//   }

//   componentDidMount(){
//     // console.log("componentDidMount")
//   }

//   componentWillReceiveProps(nextProps){
//     // console.log("componentWillReceiveProps", nextProps)
//   }

//   shouldComponentUpdate(nextProps, nextState){
//     // console.log("shouldComponentUpdate", nextProps)
//     return true
//   }

//   componentWillUpdate(nextProps){
//     // console.log("componentWillUpdate", nextProps)
//   }

//   componentDidUpdate(prevProps){
//     // console.log("componentDidUpdate", prevProps)
//   }

//   componentWillUnmount(){
//     // console.log("componentWillUnmount")
//   }
//   render(){
//     // console.log("Render")
//     return (
//       <div className="App">
        
//       </div>
//     );
//   }
// }


