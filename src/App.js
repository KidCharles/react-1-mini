import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      picture: "",
      name: ""
    };
  }
  handlePicture(val) {
    this.setState({
      picture: val
    });
  }
  handleName(val) {
    this.setState({
      name: val
    });
  }
  addFriend() {
    const { friends, picture, name } = this.state;
    let newFriend = friends.slice();
    newFriend.push({ picture, name });
    this.setState({
      friends: newFriend,
      picture: "",
      name: ""
    });
  }
  render() {
    const {friends} = this.state
    let mappedFriends = friends.map((e,i)=> {
      return(
        <div key={i+e.name}>
          <img width="100px" src={e.picture}/>
          <span>{e.name}</span>
        </div> 
      )
    })
    return (
      <div>
        <span>Picture:</span>
        <input
          value={this.state.picture}
          onChange={e => this.handlePicture(e.target.value)}
        />
        <span>Name:</span>
        <input
          value={this.state.name}
          onChange={e => this.handleName(e.target.value)}
        />
        <button onClick={() => this.addFriend()}>Add Friend</button>
        {mappedFriends}
      </div>
    );
  }
}

export default App;
