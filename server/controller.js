const allGames = require('./games.json');
let myGames = [];
let id = allGames[allGames.length -1].id +1;

module.exports = {
    getGames: (req, res) => {
        const {search} = req.query;
        const gamesArr = [];

        if (search) {
            let filteredGames = allGames.filter((games) => games.name.toLowerCase().includes(search.toLowerCase())
            );
            for (let i = 0; i < allGames.length; i++)
            if (filteredGames[i]) {
                gamesArr.push(filteredGames[i]);
            }
        } else { 
            for (let i = 0; i < allGames.length; i++)
            gamesArr.push(allGames[i]);
        }
        return res.status(200).send(gamesArr);
    }, 
    getMyGames: (req, res) => {
        res.status(200).send(myGames);
    },
    addGame: (req, res) => {
        const {name, numberOfPlayers, neededToPlay, howToPlay, howToWin} = req.body;
        const game = {
            id,
            name,
            numberOfPlayers,
            neededToPlay,
            howToPlay,
            howToWin,
        }
        allGames.push(game);
        id++;
        res.status(200).send(allGames)
    },
    addToMyGames: (req, res) => {
        const {id} = req.params;
        const foundGame = {...allGames.find((games) => games.id === +id) };

        myGames.push(foundGame);
        
        res.status(200).send(myGames);
    },
    editGame: (req, res) => {
        let index = myGames.findIndex(e => e.id === +req.params.id);
        myGames[index] = {
            id: myGames[index].id,
            name: req.body.name || myGames[index].name,
            numberOfPlayers: req.body.numberOfPlayers || myGames[index].numberOfPlayers,
            neededToPlay: req.body.neededToPlay || myGames[index].neededToPlay,
            howToPlay: req.body.howToPlay || myGames[index].howToPlay,
            howToWin: req.body.howToWin || myGames[index].howToWin,
        }

        res.status(200).send(myGames)
    },
    deleteGame: (req, res) => {
        let index = myGames.findIndex(e => e.id === +req.params.id)

        myGames.splice(index, 1);
        
        res.status(200).send(myGames)
    },
};