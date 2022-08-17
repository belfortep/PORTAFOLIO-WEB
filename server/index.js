//------------------------------REQUIRE------------------------------
const express = require('express');
const app = express();
const { join } = require('path');
const { connectDB } = require('./db/db');
const dotenv = require('dotenv')
const socialRoutes = require('./routes/social')

//------------------------------CONFIG------------------------------

dotenv.config();

app.set('port', process.env.PORT || 4000);

//------------------------------MIDDLEWARES------------------------------

app.use(express.json());

//------------------------------DB------------------------------

connectDB();

//------------------------------ROUTES------------------------------

app.use('/api/social', socialRoutes);

app.use('/static', express.static(join(__dirname, '../client/build//static')));

app.get('*', function (req, res) {
    res.sendFile('index.html', { root: join(__dirname, '../client/build/') });
});

//------------------------------SERVER------------------------------


app.listen(app.get('port'), () => {
    console.log('Server on port ' + app.get('port'));
})