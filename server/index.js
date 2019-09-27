require('dotenv').config();
const express = require('express');
const session = require('express-session');
const app = express();
const massive = require('massive');
const authController = require('./controllers/authController');
const postController = require('./controllers/postController');

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

app.use(express.json());
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db connected')
})

//authorization
app.get('/auth/user', authController.getUser);
app.post('/auth/register', authController.register);
app.post('/auth/login', authController.login);
app.post('/auth/logout', authController.logout);

//posts
app.get('/api/spots', postController.displayPosts);
app.get('/api/my-spots', postController.getUserPost);
app.post('/api/spots', postController.addPost);
app.delete('/api/spots/', postController.deletePost);
app.put('/api/spots/', postController.editPost);

app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}`));