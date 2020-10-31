import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Games from './components/Games';
import MyGames from './components/MyGames';
import axios from 'axios';


class App extends Component {
  constructor() {
    super();

    this.state = {
      myGames: []
    };
    this.addGame = this.addGame.bind(this);
  }
  

  componentDidMount(){
    axios
    .get('/api/myGames')
    .then((res) => {
      this.setState({myGames: res.data});
    }).catch((err) => console.log(err));
  };


  addGame(id) {
    axios
    .post(`/api/games/:${id}`)
    .then((res) => {
      this.setState({myGames: res.data})
    })
    .catch((err) => console.log(err))
  };

  deleteGame(index) {
    axios
    .delete(`/api/games/:${index}`)
    .then((res) => {
      this.setState({myGames: res.data})
    })
    .catch((err) => console.log(err))
  };

  editName = (index, name) => {
    axios
    .put(`/api/myGames/${index}`, {name})
    .then((res) => {
      this.setState({myGames: res.data});
    })
    .catch((err) => console.log(err))
  };

  editNumberOfPlayers = (index, numberOfPlayers) => {
    axios
    .put(`/api/myGames/${index}`, {numberOfPlayers})
    .then((res) => {
      this.setState({myGames: res.data});
    })
    .catch((err) => console.log(err))
  };

  editNeededToPlay = (index, neededToPlay) => {
    axios
    .put(`/api/myGames/${index}`, {neededToPlay})
    .then((res) => {
      this.setState({myGames: res.data});
    })
    .catch((err) => console.log(err))
  };

  render() {
  return (
    <div className="App">
      <Header/>
      <main>
        <MyGames
        myGames={this.state.myGames}
        deleteGame={this.deleteGame}
        editName={this.editName}
        editNumberOfPlayers={this.editNumberOfPlayers}
        editNeededToPlay={this.editNeededToPlay}/>
        <Games/>
      </main>
    </div>
  );
  }
}

export default App;
