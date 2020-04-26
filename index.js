const config = require('config');
const express = require('express');
const app = express();
const PORT = config.get('PORT');

app.use('/', require('./routes/index'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static(__dirname + '/public'));
app.listen(PORT, () => console.log(`server running on ${PORT}`));
