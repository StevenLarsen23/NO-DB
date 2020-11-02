import React from "react";

const GameList = (props) => {
  return (
    <div>
    <li
      className="games-list"
      onClick={() => {
        props.addToMyGames(props.games.id);
      }}
    >
      <h1>{props.games.name}</h1>
      <h3><strong>Number of players:</strong> {props.games.numberOfPlayers}</h3>
      <h3><strong>Needed to play:</strong> {props.games.neededToPlay}</h3>
      <p><strong>How to play:</strong> <br/>{props.games.howToPlay}</p>
      <p><strong>How to win:</strong> <br/>{props.games.howToWin}</p>
    </li>
    </div>
  );
};

export default GameList;
