const express = require("express")
const app = express();
const PORT = process.env.PORT || 5000
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
   
app.listen(PORT,()=>{
    console.log(`Server is Running on Port ${PORT}`);
})