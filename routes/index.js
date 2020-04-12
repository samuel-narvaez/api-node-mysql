const express = require('express');
const router = express.Router();
const Connection = require('../config/connection');


function student() {
  return `SELECT * FROM student`;
}

router.get('/student', async(req, res) => {
  const query = student();
  try {
    const Student = await Connection.query(query);
    res.status(200).json({
      message: 'Datos Obtenidos Correctamente',
      Student: Student[0]
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error : error.message
    })
  }
});



module.exports = router;
