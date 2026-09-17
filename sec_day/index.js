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
const app = express();

app.use(express.urlencoded(
  { extended: false }

)
);


app.get('/api/users', (req, res) => {
  res.json(users);
});

app.get("/users", (req, res) => {
  const html = `<html>
  <head>
    <title>Users</title>
  </head>
  <body>
    <h1>Users</h1>
    <ul>
      ${users.map(user => `<li>${user.first_name} - ${user.last_name}</li> - ${user.email} - ${user.job_title}`).join('')}
    </ul>
  </body>
  </html>`;
  res.send(html);
});


// app.get('/api/users/:id', (req, res) => {



// })

app.route('/api/users/:id')
  .get((req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.json(user || { message: 'User not found' });
  })

  .post((req, res) => {
    return res.status(201).json({ message: 'User created successfully' });
  })

  .put((req, res) => {
    return res.status(200).json({ message: 'User updated successfully' });
  })
  .delete((req, res) => {

    return res.status(200).json({ message: 'User deleted successfully' });
  })

app.get('/', (req, res) => {

  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
})