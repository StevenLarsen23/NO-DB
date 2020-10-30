import React from "react";

const GameList = (props) => {
  return (
    <li
      className="gamelist"
      onClick={() => {
        props.addGame(props.games.id);
      }}
    >
      <h2>{props.games.name}</h2>
    </li>
  );
};

export default GameList;