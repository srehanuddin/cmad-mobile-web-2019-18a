import React from 'react';
import logo from './logo.svg';
import './App.css';
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import Firebase from "firebase";
import config from './config'

class App extends React.Component{
  constructor(props){
    super(props);

    Firebase.initializeApp(config);
    this.state = {
      value : "",
      allData : [],
      index : false,
      delButton : true,
      edtButton : true,
      editValue : ""
    }
    this.onAdd = this.onAdd.bind(this)
    this.saveData = this.saveData.bind(this)
    this.delete = this.delete.bind(this)
    this.edit = this.edit.bind(this)
    this.editChange = this.editChange.bind(this)

    // var database = firebase.database();
    // Firebase.database().ref('users/').set({
    //   username: "Ali",
    //   email: "abc",
    //   profile_picture : "image"
    // });

    this.readFromFirebase()

  }

  writeInFirebase () {
    console.log(this.state.allData, "data")
    Firebase.database().ref('todos/').set({
      todos : this.state.allData
    });
  }

  readFromFirebase () {
    Firebase.database().ref('/todos/').once('value').then((snapshot) => {
      console.log(snapshot.val(), "value")
      this.setState({
        allData : snapshot.val().todos
      })
    });

  }

  onAdd(event){
    this.setState({
      value : event.target.value
    })
  }

  editChange(event){
    this.setState({
      editValue : event.target.value
    })
  }

  saveData(e){
    e.preventDefault()
    if(this.state.value == ""){
      alert('Data Missing')
    }
    else {
      this.setState({
        allData : [...this.state.allData, this.state.value]
      }, this.writeInFirebase)
      // this.writeInFirebase()
      this.state.value = ""
    }
  }

  delete(i){
    var deleteData = this.state.allData.splice(i, 1)
    this.setState({
      allData : this.state.allData
    },this.writeInFirebase)
  }

  edit(i, data){
    this.setState({
      index : i,
      delButton : false,
      edtButton : false,
      editValue : data
    })
  }

  save(){
    // console.log('save workssssssss')
  }

  cancel(){
    // console.log('cancel works')
  }

  render(){
    return (
      <div className="App">
        <form onSubmit={this.saveData}>
          <input type="text" onChange={this.onAdd} value={this.state.value} />
          <button>Add</button>
        </form>
        {this.state.allData.map((value, index) => {
          return <ul key={index}>
                    <li>
                      <input type="text" className={this.state.index === index ? "showField" : "hideField"} value={this.state.editValue}
                      onChange={this.editChange}
                      />
                      <span className={this.state.index === index ? "hideField" : "showField"}>{value}</span>
                      <button
                       onClick={() => 
                       {this.state.delButton ? 
                        this.delete(index) : this.save() }}
                      >
                      {this.state.delButton ?  "Delete" : "Save"}
                      </button>
                      <button onClick={() => 
                        {this.state.delButton ? 
                          this.edit(index, value) : this.cancel() }}
                      >
                      {this.state.edtButton ?  "Edit" : "Cancel"}
                      </button>
                    </li>
                </ul>
        })}
      </div>
    );
  }
}

export default App;
