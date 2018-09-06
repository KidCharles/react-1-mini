import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      picture: "",
      name: ""
    };
    // this.updatePicture = this.updatePicture.bind(this);
    // this.updateName = this.updateName.bind(this);
  }
  updatePicture = e => {
    this.setState({
      picture: e.target.value
    });
  };
  updateName = e => {
    this.setState({
      name: e.target.value
    });
  };
  addFriend() {
    const { friends, picture, name } = this.state;
    let newFriends = friends.slice();
    newFriends.push({picture, name});
    this.setState({
      friends: newFriends,
      picture: "",
      name: ""
    });
  }
  render() {
    // console.log(this.state);
    const {friends}=this.state;
    let mappedFriends = friends.map((e,i)=> {
      return(
        <div key={i+e.name}>
        <img width="100px" src={e.picture}/>
        <span>{e.name}</span>
        </div> 
      )
    } )
    return (
      <div>
        <span>Picture:</span>
        
        <input type="" className="" value={this.state.picture} onChange={this.updatePicture} />
        <span>Name:</span>
        <input type="" className="" value={this.state.name} onChange={this.updateName} />
        <button type="" className="" onClick={() => this.addFriend()}>
          Add friend
        </button>
        {mappedFriends}
      </div>
    );
  }
}

export default App;
