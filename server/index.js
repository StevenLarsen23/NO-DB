const express = require('express'),
app = express(),
ctrl = require('./controller.js'),
port = 4423;

app.use(express.json());

app.get('/api/games', ctrl.getGames);
app.get('/api/games/:id', ctrl.getMyGames);
app.post('/api/games', ctrl.addGame)
app.post('/api/games/:id', ctrl.addToMyGames);
app.put('/api/myGames/:id', ctrl.editGame);
app.delete('/api/myGames/:index', ctrl.deleteGame);

app.listen(port, () => console.log(`Server listening on port ${port}`));