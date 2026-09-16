import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/jokes', (req, res) => {
    const jokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "Why did the bicycle fall over? Because it was two-tired!",
        "Why did the tomato turn red? Because it saw the salad dressing!",
        "Why did the math book look sad? Because it had too many problems!"
    ];
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    res.send(randomJoke);
    
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});