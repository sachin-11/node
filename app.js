const express = require('express');


const app = express();

app.get('/', (req, res) => {
    res.send('Hello this is first response using node js')
})


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server is listen on port ${port}`);
})