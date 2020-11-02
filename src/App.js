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
    this.addToMyGames = this.addToMyGames.bind(this);
    this.deleteGame = this.deleteGame.bind(this)
  }
  

  componentDidMount(){
    axios
    .get('/api/myGames')
    .then((res) => {
      this.setState({myGames: res.data});
    }).catch((err) => console.log(err));
  };


  addToMyGames(id) {
    axios
    .post(`/api/myGames/${id}`)
    .then((res) => {
      this.setState({myGames: res.data})
    })
    .catch((err) => console.log(err))
  };

  deleteGame(id) {
    axios
    .delete(`/api/myGames/${id}`)
    .then((res) => {
      this.setState({myGames: res.data})
    })
    .catch((err) => console.log(err))
  };

  editNumberOfPlayers = (id, numberOfPlayers) => {
    axios 
    .put(`/api/myGames/${id}`, {numberOfPlayers})
    .then((res) => {
      this.setState({myGames: res.data});
    })
    .catch((err) => console.log(err))
  };

  render() {
  return (
    <div className="App">
      <Header/>
      <main className='games'>
        <div>
        <p className='list-title'>My Games</p>
        <MyGames
        myGames={this.state.myGames}
        deleteGame={this.deleteGame}
        editNumberOfPlayers={this.editNumberOfPlayers}/>
        </div>
        <div>
        <p className='list-title'>All Games</p>
        <Games addToMyGames={this.addToMyGames}/>
        </div>
      </main>
    </div>
  );
  }
}

export default App;
