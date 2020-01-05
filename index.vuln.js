

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/vuln', Vulnerability);
app.get('/vuln2', Vulnerability2);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))


const Vulnerability = (req, res) => {
    var user = req.params.user;
    var respond = `
        <h1>Hi, ${user}</h1>
    `
    res.send(respond);
}


const Vulnerability2 = (req, res) => {
    var {user} = req.params;
    var respond = `
        <script> var x = "${user}" </script>
    `
    res.send(respond);
}

