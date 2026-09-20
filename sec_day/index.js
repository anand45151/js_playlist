// const express = require('express');

// const maths = require('./math.js');
// const app = express();
// const port = 3000;


// app.use(express.json());


// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });


// app.get('/substract',(req,res)=>{

// })
// app.get('/add', (req, res) => {
//   const { a, b } = req.query;
//   const result = maths(Number(a), Number(b));
//   res.json({ result });
// });            





// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

/*const http = require('http');

const fs = require('fs');


const server = http.createServer(
  (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });



    res.end('Hello, World!');

    console.log('Server is running on http://localhost:3000');

    const log = `Request Method: ${req.method}, Request URL: ${req.url}\n`;
    if (req.method === 'GET') {


      fs.appendFile('server.log', log, (err) => {
        if (err) {
          console.error('Error writing to log file:', err);
        }
      });
    }
    else {

      consolse.log('Request method is not GET, log not written.');
    }


  })
*/

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// app.get("/Home", (req, res) => {
//   res.send('This is the Home page');

// })


// app.get("/about", (req, res) => {
//   res.send('This is the About page');

// })
// app.post('/submit', (req, res) => {

//   res.send('Data received successfully!');
// });




// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });



const express = require('express');
const users = require('./users.json');
const mongoose = require('mongoose');

const app = express();


app.use(express.json());

// app.use(express.urlencoded({ extended: false }));



mongoose.connect('mongodb://localhost:27017/PiyushGarg')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });



const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },

  last_name: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true,
    unique: true
  },

  job_title: {
    type: String,
    required: false
  }
});

const User = mongoose.model('User', userSchema);




app.post('/api/users', async (req, res) => {
  try {

    const user = await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      job_title: req.body.job_title
    });
    res.status(201).json({ message: 'User created successfully', user });

  }
  catch (err) {
    console.error('Error creating user:', err);
    res.status(500).json({ message: 'Internal server error', error: err.message });
  }


});


app.get('/users', async (req, res) => {


  try {
    const user = await User.find();
    res.status(200).json({ message: 'Users fetched successfully', user });

  }
  catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ message: 'Internal server error', error: err.message });
  }
});


app.get('/api/users/:id', async (req, res) => {
  try {
    const userID = req.params.id;
    const user = await User.findById(userID);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User fetched successfully', user });


  }
  catch (err) {
    console.error('Error fetching user:', err);
    res.status(500).json({ message: 'Internal server error', error: err.message });
  }
})


app.put('/api/user/:id',async(req,res)=>{
  try{

      const userID = req.params.id;
      const user = await User.findByIdAndUpdate(userID,req.body,{new:true});

  }
  catch(err){
    console.error('Error updating user:', err);
    res.status(500).json({ message: 'Internal server error', error: err.message });
  }

})




    // app.get('/api/users/:id', (req, res) => {



    // })

    app.route('/api/users/:id')
      .get(async (req, res) => {

        const id = parseInt(req.params.id);
        const user = users.find(u => u.id === id);
        res.json(user || { message: 'User not found' });
      })
      .post(async (req, res) => {
        try {
          const user = await User.create(req.body);
          res.status(201).json({ message: 'User created successfully', user });
        } catch (err) {
          console.error('Error creating user:', err);
          res.status(500).json({ message: 'Internal server error', error: err.message });
        }
      })

      .put(async (req, res) => {
        try {
          const userID = req.params.id;
          const user = await User.findByIdAndUpdate(userID, req.body, { new: true });
          if (!user) {
            return res.status(404).json({ message: 'User not found' });
          }
          res.status(200).json({ message: 'User updated successfully', user });
        } catch (err) {
          console.error('Error updating user:', err);
          res.status(500).json({ message: 'Internal server error', error: err.message });
        }
      })
      .delete(async (req, res) => {
        try {
          const userID = req.params.id;
          const user = await User.findByIdAndDelete(userID);
          if (!user) {
            return res.status(404).json({ message: 'User not found' });
          }
          res.status(200).json({ message: 'User deleted successfully', user });
        } catch (err) {
          console.error('Error deleting user:', err);
          res.status(500).json({ message: 'Internal server error', error: err.message });
        }
      })

    app.listen(3000, () => {
      console.log('Server is running on http://localhost:3000');
    })