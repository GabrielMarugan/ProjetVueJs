require('dotenv').config();
const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');

// db.createUser({user: "admin", pwd: "password", roles: [{ role: "dbOwner", db: "cacestcool"}] })
const user = process.env.MONGO_USER;
const pass = process.env.MONGO_PASS;
const cluster = process.env.MONGO_URL;
const db = process.env.MONGO_DB;

mongoose.connect(
  "mongodb://" + cluster + "/" + db,
  {
    pass,
    user,   
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((e) => console.log(e, 'Connexion à MongoDB échouée !'));

const usersRoutes = require('./routes/users');
const postsRoutes = require('./routes/posts');
const commentsRoutes = require ('./routes/comments');

const app = express();

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:8080'
}));

// creation des routes de l'app
app.use('/ping', (req, res) => {
  res.status(200).send("PING OK");
});

app.use('/api/v1/user', usersRoutes);
app.use('/api/v1/post', postsRoutes);
app.use('/api/v1/comment', commentsRoutes);

module.exports = app;
