const express = require('express');
const morgan = require('morgan');

const cors = require('cors');
const app = express();

//Ruta Code
const indexRoutes = require('./routes/index');

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Settings
app.set('port', process.env.PORT || 3000);


// Rutas
app.use('/', indexRoutes);


//Start Server
app.listen(app.get('port'), () => {
    console.log('Server running on port ', app.get('port'));
})