const express = require('express')
const app = express()
const path = require('path');
const port = 3000 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'), { extensions: ['html', 'htm'] }));app.get('/hello', (req, res) => {
res.send('Hello World!')
}) 


  export const config = {
	runtime: 'edge',
};

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
