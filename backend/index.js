const ConnectToMongo = require("./db");
const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv');

ConnectToMongo();

const app = express();
dotenv.config();
const port = process.env.PORT;

// Available Routes
app.use(express.json());

// Configure CORS to allow requests from specific origin
const corsOptions = {
  origin: 'https://cozynotes-mern-1.onrender.com'
};
app.use(cors(corsOptions));
app.use(cors());

app.use('/api/auth', require('./routes/auth.js'));
app.use('/api/notes', require('./routes/notes.js'));
app.use('/api/chatmsg', require('./routes/chatmsg.js'));

app.get("/", (req, res) => {
  res.send("Hello Abhishek!");
});

app.listen(port, () => {
  console.log(`CozyNotes Backend listening at http://localhost:${port}`);
});
