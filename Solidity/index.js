const express = require('express');
const app = express();
const {ConnectionDataBase} = require('./Connection')
const emproute = require('./routes/EmpRoutes')

ConnectionDataBase("mongodb://localhost:27017/PiyushGarg")
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection failed:", err));

// Built-in body parser middlewares (must be placed before routes)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/emp', emproute);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
