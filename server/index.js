const express = require('express'),
app = express(),
ctrl = require('./controler.js'),
port = 4423;

app.use(express.json());

app.get('/api/games', ctrl.getGames);
app.get('/api/games/:id', ctrl.getMyGames);
app.post('/api/games', ctrl.addGame);
app.put('/api/myGames/:id', ctrl.editGame);
app.delete('/api/myGames/:id', ctrl.deleteGame);

app.listen(port, () => console.log(`Server listening on port ${port}`));