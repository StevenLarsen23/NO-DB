import React from 'react';
import MyGamesList from './MyGamesList';

const MyGames = (props) => {
    let gamesArr = props.myGames.map((games, index) => (
        <MyGamesList
        key={`${games.id}-${index}`}
        games={games}
        deleteGame={props.deleteGame}
        editGame={props.editNumberOfPlayers}
        index={index}
        />
    ));
    return <ul className='my-games-list'>{gamesArr}</ul>;
};

export default MyGames;