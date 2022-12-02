const express = require('express');


const app = express();

app.get('/', (req, res) => {
    res.send('hi this is updated')
})


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server is listen on port ${port}`);
})