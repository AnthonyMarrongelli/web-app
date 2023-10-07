const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/userSchema.js')
const app = express()

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
      const { name, password } = req.query; // Use req.query for GET requests
  
      if (!name || !password) {
        return res.status(400).json({ message: "Name and password are required" });
      }
  
      // Assuming you have a User model and collection in MongoDB
      const user = await User.findOne({ name: name });
  
      if (!user) {
        return res.status(404).json({ message: "Incorrect username or password" });
      }
  
      // Check if the password matches (you should have a proper password hashing mechanism)
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

