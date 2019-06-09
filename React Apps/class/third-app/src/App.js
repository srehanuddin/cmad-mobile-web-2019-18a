import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import './index.css';
import Header from './header';
import Home from './home';
import Footer from './footer';
import About from './about';
import Contact from './contact';

class App extends Component {
  constructor(props) {
    super(props)
    this.name = "Ali"
    this.state = {
      counter: 0,
      number: 0,
      a: "Home"
    }

    setTimeout(() => {
      this.name = "Rehan"
    }, 1000)

    setInterval(() => {
      // this.state.counter = this.state.counter+1
      this.setState({
        counter: ++this.state.counter
      })
      // this.dec()
    }, 1000)

    this.inc = this.inc.bind(this)
    this.dec = this.dec.bind(this)
    this.show = this.show.bind(this)


  }

  inc = (e) => {
    // console.log(this, e.target)
    this.setState({
      number: ++this.state.number
    })
  }

  dec(e) {
    // console.log(this,e)
    this.setState({
      number: --this.state.number
    })
  }

  show(showType) {
    // console.log(this,e)
    this.setState({
      a: showType
    })
  }

  renderPage() {
    let page = <Home />
    switch (this.state.a) {
      case "Home":
        page = <Home />
        break;
      case "About":
        page = <About />
        break;
      case "Contact":
        page = <Contact />
        break;
    }
    return page
  }

  renderNavButton(text, page){
    return <button onClick={() => {
      this.show(page)
    }}>Show {text}</button>
  }

  renderNavigation(){
    return <div>
      {this.renderNavButton("Home", "Home")}
      {this.renderNavButton("About", "About")}
      {this.renderNavButton("Contact", "Contact")}

    </div>
    // return <button onClick={() => {
    //   this.show("Home")
    // }}>Show Home</button>
    // <button onClick={() => {
    //   this.show("About")
    // }}>Show About</button>
    // <button onClick={() => {
    //   this.show("Contact")
    // }}>Show Contact</button>
  }



  render() {

    // setInterval( ()=>{
    //   // this.state.counter = this.state.counter+1

    //   this.dec()
    // },1000)
    // var a = false
    return (
      <div className="App">
        {/* <Header />
        <Home />
        <Footer /> */}
        <h1>Hello {this.name}</h1>
        <h1>Counter {this.state.counter}</h1>
        <h1>Number {this.state.number}
          <button onClick={this.inc}>+</button>
          <button onClick={this.dec}>-</button>
        </h1>

        {/* <Home />
        <About />
        <Contact /> */}
        <div>
          {/* {this.state.a == true ? 1 : ""}
          {this.state.a == false ? 2 : ""} */}

{/* 
          <button onClick={() => {
            this.show("Home")
          }}>Show Home</button>
          <button onClick={() => {
            this.show("About")
          }}>Show About</button>
          <button onClick={() => {
            this.show("Contact")
          }}>Show Contact</button> */}

          {/* {this.state.a == "Home" ? <Home /> : ""}
          {this.state.a == "About" ? <About /> : ""}
          {this.state.a == "Contact" ? <Contact /> : ""} */}
          
          {this.renderNavigation()}

          {this.renderPage()}
        </div>

      </div>
    );
  }
}

export default App;
