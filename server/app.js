// Include the userRoutes module
let userRoute = require('./route/userRoute');
app.use('/api/user', userRoutes);

let petProfileRoute = require('.route/petProfileRoute');

const express = require('express');
const app = express();

// Troubleshooting
// app.use(express.static('client/views'));
app.get('/', function (req,res) {
	res.sendFile('index.html', {root: './client/views' })
})

app.get('/about', function (req,res) {
	res.sendFile('about.html', {root: './client/views' })
})

// open up the resources publically 
app.use(express.static('client/public'));

app.listen(1337, () => console.log('Marist Chatter listening on port 1337!'));