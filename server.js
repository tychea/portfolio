const express = require("express")
const app = express();

//import authentication Routes
const authRoutes = require("./routes/auth");

//Routes Middleware
app.use('/api/user',authRoutes);


app.get('/', (req, res) => {
    res.send('Hello World! How Are You Steven, Testing')
  })
  app.get('/test', (req, res) => {
    res.send('Hello World! How Are You Steven, Testing')
  })
   
app.listen(3000,()=>{
    console.log("Server is Running on Port 3000");
})