const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const connectDb = require('./config/db');
//import authentication Routes
const documentRoute = require('./routes/api/document');

//connect to database
connectDb();
//Init Middleware allow to receive data from body
app.use(express.json({ extended: false }));
//Routes Middleware
app.use('/api/users', require('./routes/api/users'));
app.use('/api/documents', documentRoute);

app.get('/', (req, res) => {
  res.send('Hello World! How Are You Steven, Testing');
});
app.get('/test', (req, res) => {
  res.send('Hello World! How Are You Steven, Testing');
});

app.listen(PORT, () => {
  console.log(`Server is Running on Port ${PORT}`);
});
