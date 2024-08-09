const express = require('express');
const app = express();
const {v4: uuidv4} = require('uuid')

app.use(express.json());

// You can skip a step by requiring the modules inline like so.
// It works to do the require on its own line as well, it's up to you.
app.use("/fruit", require("./routes/fruitRoutes"));
app.use("/vegetable", require("./routes/vegetableRoutes"));


const users = [
    { name: 'joe', age: 20, _id: uuidv4() },
    { name: 'moe', age: 24, _id: uuidv4() },
    { name: 'betty', age: 20, _id: uuidv4() },
    { name: 'sarah', age: 20, _id: uuidv4() },
    { name: 'mike', age: 20, _id: uuidv4() }
];

const movies = [
    { _id: uuidv4(), title: 'die hard', genre: 'action' },
    { _id: uuidv4(), title: 'star wars IV', genre: 'fantasy' },
    { _id: uuidv4(), title: 'lion king', genre: 'fantasy' },
    { _id: uuidv4(), title: 'friday the 13th', genre: 'horror' }
];

app.post('/movies', (req, res) => {
    const newMovie = req.body;
    newMovie._id = uuidv4();
    movies.push(newMovie);
    res.send(`Successfully added "${newMovie.title}" to the database`);
});


app.get('/movies', (req, res) => {
    res.send(movies);
})

app.get('/', (req, res) => {
    res.send("Hello!");
});

app.get('/users', (req, res) => {
    res.send(users);
});

app.listen(3000, () => {
    console.log('Server Listening on Port 3000')
});