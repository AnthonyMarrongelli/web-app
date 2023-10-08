const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/userSchema.js')
const cors = require('cors')
const app = express()

app.use(cors({
  origin: 'http://localhost:3000',
}));
app.use(express.json())


//Sign-up post request
app.post("/register", async (req, res) => {

    try {
        const { name, password, email } = req.body;

        if (!name || !password || !email) {
            return res.status(400).json({ message: "Name, password, and email are required" });
        }

        // Assuming you have a User model defined
        const user = await User.create({
            name,
            password,
            email
        });

        res.status(200).json(user);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Login get request
app.get("/login", async (req, res) => {
    try {

      const { email, password } = req.query; // Use req.query for GET requests
      
      //If either is missing, we send an error
      if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
      }
  
      // Assuming you have a User model and collection in MongoDB
      const user = await User.findOne({ email: email });
  
      //If user isnt in the DB
      if (!user) {
        return res.status(404).json({ message: "Incorrect username or password" });
      }
  
      // Check if the password matches
      if (user.password !== password) {
        return res.status(401).json({ message: "Incorrect username password" });
      }
  
      // Successful login
      res.status(200).json(user);
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});


//Opening port to listen for requests
app.listen(3853, () => {
    console.log("Server listening on port 3853")
})


//MongoDB Connection
mongoose.connect('mongodb+srv://admin123:Cat3456@maincluster.rhotopq.mongodb.net/web-app?retryWrites=true&w=majority')
.then(() => {
    console.log("Connected to MongoDB")
}).catch(() => {
    console.log(error)
})

