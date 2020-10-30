import React, {Component} from 'react';

class MyGamesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nameInput: props.games.name,
            numberOfPlayersInput: props.games.numberOfPlayers,
            neededToPlayInput: props.games.neededToPlay,
            howToPlayInput: props.games.howToPlay,
            howToWinInput: props.games.howToWin,
            toggleEdit: false,
        };
    }

    handleChange = (event) => {
        this.setState({nameInput: event.target.value});
        this.setState({numberOfPlayersInput: event.target.value});
        this.setState({neededToPlayInput: event.target.value});
        this.setState({howToPlayInput: event.target.value});
        this.setState({howToWinInput: event.target.value});
    };

    toggleEdit =() => {
        this.setState({ toggleEdit: !this.state.toggleEdit});
    };

    render(){
        let {games} = this.props;
        return (
            <li className='games'>
                <p 
                className='deleteButton'
                onClick={(e) => {
                    this.props.deleteGame(this.props.index)
                }}
                >
                    {'X'}
                </p>
            <h2>{games.name}</h2>
            </li>
        )
    }
}

export default MyGamesList