# reflected-xss-example

## there is 2 vulnerabilities

1. reflected xss in `index.vuln.js` line `21`

```js
const Vulnerability = (req, res) => {
    var user = req.params.user;
    var respond = `
        <h1>Hi, ${user}</h1>
    `
    res.send(respond);
}
```

2. reflected xss in `index.vuln.js` line `30`

```js
const Vulnerability2 = (req, res) => {
    var {user} = req.params;
    var respond = `
        <script> var x = "${user}" </script>
    `
    res.send(respond);
}
```
