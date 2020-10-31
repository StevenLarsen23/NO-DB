import React, { Component } from "react";

class MyGamesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameInput: props.games.name,
      numberOfPlayersInput: props.games.numberOfPlayers,
      neededToPlayInput: props.games.neededToPlay,
      // howToPlayInput: props.games.howToPlay,
      // howToWinInput: props.games.howToWin,
      toggleEdit: false,
    };
  }

  handleChange = (event) => {
    this.setState({ nameInput: event.target.value });
    this.setState({ numberOfPlayersInput: event.target.value });
    this.setState({ neededToPlayInput: event.target.value });
    // this.setState({howToPlayInput: event.target.value});
    // this.setState({howToWinInput: event.target.value});
  };

  toggleEdit = () => {
    this.setState({ toggleEdit: !this.state.toggleEdit });
  };

  render() {
    let { games } = this.props;
    return (
      <li className="games">
        <p
          className="deleteButton"
          onClick={(e) => {
            this.props.deleteGame(this.props.index);
          }}
        >
          {"X"}
        </p>
        <h2>{games.name}</h2>
        {this.state.toggleEdit ? (
          <input value={this.state.nameInput} onChange={this.handleChange} />
        ) : (
          <h3>Name: {games.name}</h3>
        )}
        {this.state.toggleEdit ? (
          <input
            value={this.state.numberOfPlayersInput}
            onChange={this.handleChange}
          />
        ) : (
          <h3>Number of Players: {games.numberOfPlayers}</h3>
        )}
        {this.state.toggleEdit ? (
          <input
            value={this.state.neededToPlayInput}
            onChange={this.handleChange}
          />
        ) : (
          <h3>Name: {games.name}</h3>
        )}
        {this.state.toggleEdit ? (
          <div>
            <button
              onClick={() => {
                this.props.editName(this.props.index, this.state.nameInput);
                this.props.editNumberOfPlayers(
                  this.props.index,
                  this.state.numberOfPlayersInput
                );
                this.props.editNeededToPlay(
                  this.props.index,
                  this.state.neededToPlayInput
                );
              }}
            >
              Save
            </button>
            <button
              onClick={() => {
                this.setState({
                  nameInput: games.name,
                  numberOfPlayersInput: games.numberOfPlayers,
                  neededToPlayInput: games.neededToPlay,
                });
                this.toggleEdit();
              }}
            >
              Cancel
            </button>
          </div>
        ) : null}
        <button onClick={this.toggleEdit}>Edit</button>)
      </li>
    );
  }
}

export default MyGamesList;
