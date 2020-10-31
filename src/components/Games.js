import React, { Component } from "react";
import axios from "axios";
import GameList from "./GameList";

class Games extends Component {
  constructor() {
    super();

    this.state = {
      searchInput: "",
      showGames: [],
    };
  }

  componentDidMount() {
    axios.get("/api/games").then((res) => {
      this.setState({
        showGames: res.data,
      });
    });
  }

  handleInput = (e) => {
    this.setState({ searchInput: e.target.value });
    axios
      .get(`/api/games?search=${e.target.value}`)
      .then((res) => {
        this.setState({ showGames: res.data });
      })
      .catch((err) => console.log(err));
  };

  render() {
    let mappedGames = [];
    mappedGames = this.state.showGames.map((games) => {
      <GameList 
      key={games.id} 
      games={games} 
      addGame={this.props.addGame} 
      />;
    });
    console.log(mappedGames)
    return (
      <div>
        <ul className="game-list">{mappedGames}</ul>
      </div>
    );
  }
}


export default Games