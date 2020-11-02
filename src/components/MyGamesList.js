import React, { Component } from "react";

class MyGamesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfPlayersInput: props.games.numberOfPlayers,
      toggleEdit: false,
    };
  }

  handleChange = (event) => {
    this.setState({ numberOfPlayersInput: event.target.value });
  };

  toggleEdit = () => {
    this.setState({ toggleEdit: !this.state.toggleEdit });
  };

  render() {
    let { games } = this.props;
    console.log(games)
    return (
      <li className="games-list">
        <p
          className="delete-button"
          onClick={(e) => {
            e.stopPropagation();
            this.props.deleteGame(games.id);
          }}
        >
          {"X"}
        </p>
        <h1>{games.name}</h1>
        {this.state.toggleEdit ? (
          <input 
          value={this.state.numberOfPlayersInput} 
          onChange={this.handleChange} />
        ) : (
        <h3><strong>Number of players:</strong> {games.numberOfPlayers}</h3>
        )}
        {this.state.toggleEdit ? (
          <div>
            <button
              onClick={() => {
                this.props.editGame(
                    this.props.games.id, 
                    this.state.numberOfPlayersInput
                    );
                this.toggleEdit();
              }}
            >
              Save
            </button>
            <button
              onClick={() => {
                this.setState({ numberOfPlayersInput: games.numberOfPlayers });
                this.toggleEdit();
              }}
            >
              Cancel
            </button>
          </div>
        ) : null}

        <h3><strong>Needed to play:</strong> {games.neededToPlay}</h3>
      <p><strong>How to play:</strong> <br/>{games.howToPlay}</p>
      <p><strong>How to win:</strong> <br/>{games.howToWin}</p>
        <button className="edit-button" onClick={this.toggleEdit}>
          Edit
        </button>
      </li>
    );
  }
}

export default MyGamesList;
