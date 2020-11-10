import React, { Component } from "react";

class MyGamesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameInput: props.games.name,
      toggleEdit: false,
    };
  }

  handleChange = (event) => {
    this.setState({ nameInput: event.target.value });
  };

  toggleEdit = () => {
    this.setState({ toggleEdit: !this.state.toggleEdit });
  };

  render() {
    let { games } = this.props;
    return (
      <li className="games-list">
        <p
          className="delete-button"
          onClick={(e) => {
            e.stopPropagation();
            this.props.deleteGame(this.props.games.id);
          }}
        >
          {"X"}
        </p>
        {this.state.toggleEdit ? (
          <input 
          value={this.state.nameInput} 
          onChange={this.handleChange} />
        ) : (
        <h1>{games.name}</h1>
        )}
        {this.state.toggleEdit ? (
          <div>
            <button
              onClick={() => {
                this.props.editGame(
                    this.props.games.id, 
                    this.state.nameInput
                    );
                this.toggleEdit();
              }}
            >
              Save
            </button>
            <button
              onClick={() => {
                this.setState({ nameInput: games.name });
                this.toggleEdit();
              }}
            >
              Cancel
            </button>
          </div>
        ) : null}
        
        <h3><strong>Number of players:</strong> {games.numberOfPlayers}</h3>
        

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
