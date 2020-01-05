

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/noVuln1', NoVulnerability1);
app.get('/noVuln2', NoVulnerability2);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


const NoVulnerability1 = (req, res) => {
    var user = db.getCurrentUser();
    res.json({
        name: user.name,
        email: user.email
    });
}

const NoVulnerability2 = (req, res) => {
    var accept = req.params.accept ? true : false;
    if(accept){
        res.send('Thank you for accepting');
    }else{
        res.send('Why you did not accept it');
    }
}

