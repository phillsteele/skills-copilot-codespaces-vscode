// Create web server
// 1. npm install express
// 2. node comments.js
// 3. http://localhost:3000/comments

var express = require('express');
var app = express();

var comments = [
    'John: Hello',
    'Tom: Hi',
    'John: How are you?',
    'Tom: Fine, thank you, and you?',
    'John: I am fine, too.',
];

app.get('/comments', function(req, res) {
    res.send(comments);
});

app.listen(3000);