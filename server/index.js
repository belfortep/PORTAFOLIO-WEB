//------------------------------REQUIRE------------------------------
const express = require('express');
const app = express();
const cors = require('cors');
const { join } = require('path');
const { connectDB } = require('./db/db');
const dotenv = require('dotenv')
const socialRoutes = require('./routes/social')

//------------------------------CONFIG------------------------------

dotenv.config();

app.set('port', process.env.PORT || 4000);

//------------------------------MIDDLEWARES------------------------------

app.use(express.json());
app.use(cors());

//------------------------------DB------------------------------

connectDB();

//------------------------------ROUTES------------------------------

app.use('/api/social', socialRoutes);

//------------------------------SERVER------------------------------

app.use(express.static(join(__dirname, '../client/build')))


app.listen(app.get('port'), () => {
    console.log('Server on port ' + app.get('port'));
})