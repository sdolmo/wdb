let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;


app.get('/', function(req, res) {
    res.json({message: "Hi from the app!!!"})
})

app.listen(port, function () {
    console.log("APP is running on port " + port);
})

