const express = require('express');
const { connectToDatabase } = require('./connection');
const userRoutes = require('./routes/user');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
connectToDatabase('mongodb://localhost:27017/PiyushGarg')

app.use('/users', userRoutes);


app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});


