const express = require('express');

const app = express();

const  port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
}
);
app.get('/twitter', (req, res) => {

    res.send('Twitter API endpoint');
});

app.get('/Home' , (req,res)=>{

        res.send('<h1>Home Page</h1>');

});

app.get('/about', (req, res) => {
    
    res.send('<h1>About Page</h1>');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}
);
