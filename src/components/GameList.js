import React from "react";

const GameList = (props) => {
  return (
    <li
      className="games-list"
      onClick={() => {
        props.addGame(props.games.id);
      }}
    >
      <p className='+-button' onClick={(e) => {
        this.props.addGame(this.props.index)
      }}>
        {'+'}
      </p>
      <h2>{props.games.name}</h2>
    </li>
  );
};

export default GameList;