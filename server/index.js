const express = require('express'),
app = express(),
cors = require('cors')
ctrl = require('./controller.js'),
port = 4423;

app.use(express.json());
app.use(cors())

app.get('/api/games', ctrl.getGames);
app.get('/api/myGames', ctrl.getMyGames);
app.post('/api/games', ctrl.addGame)
app.post('/api/myGames/:id', ctrl.addToMyGames);
app.put('/api/myGames/:id', ctrl.editGame);
app.delete('/api/myGames/:id', ctrl.deleteGame);

app.listen(port, () => console.log(`Server listening on port ${port}`));