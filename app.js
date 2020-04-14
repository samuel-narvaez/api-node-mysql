const express = require('express');
const morgan = require('morgan');

const cors = require('cors');
const app = express();

//Ruta Code
const studentRouter = require('./routes/studentRouter');

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Settings
app.set('port', process.env.PORT || 3000);


// Rutas
app.use('/student', studentRouter);


//Start Server
app.listen(app.get('port'), () => {
    console.log('Server running on port ', app.get('port'));
})