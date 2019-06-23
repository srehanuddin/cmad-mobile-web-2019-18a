import React from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
  {
    title: 'Angular',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 2,
  },
  {
    title: 'React 1',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 3,
  },
  {
    title: 'React 2',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 4,
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: list,
      searchTerm : ""
    }
    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({
      list: updatedList
    })
  }

  onSearchChange(event) {
    // console.log(event.target.value)
    this.setState({ searchTerm: event.target.value });
  }

  searchFilter(keyWord){
    return function(item) {
      // console.log(keyWord, item)
      return item.title.toLowerCase().includes(keyWord.toLowerCase())
    }
  }

  render() {
    var name = "Ali"
    return (
      <div className="App">
        <input
          type="text"
          value={name}
        />
        <Hello>Rehan</Hello>
        <Hello>David</Hello>

        <form>
          <input
            type="text"
            onChange={this.onSearchChange}
          />
        </form>

        {this.state.list.filter(this.searchFilter(this.state.searchTerm)).map((item) => {
          return (
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <span>
                <button
                  onClick={() => this.onDismiss(item.objectID)}
                  type="button"
                >
                  Dismiss
                </button>
              </span>
            </div>
          );
        })}

      </div>
    );
  }
}

class Hello extends React.Component {
  render() {
    return (
      <h2 style={{ color: "blue", backgroundColor: "yellow" }}>Hello, {this.props.children}</h2>
    )
  }
}

export default App;
