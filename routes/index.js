const express = require('express');
const router = express.Router();
const Connection = require('../config/connection');


function student() {
  return `SELECT * FROM student`;
}

function studentById(id) {
  return `SELECT * FROM student WHERE id_student = ${id}`;
}

function add(body) {
  return `INSERT INTO student (nombres, apellidos, cedula)
  VALUES ('${body.nombres}','${body.apellidos}',${body.cedula} )`;
}

function update(body, id) {
  return `UPDATE student SET
  nombres = '${body.nombres}', 
  apellidos = '${body.apellidos}', 
  cedula = ${body.cedula}
  WHERE id_student = ${id}`;
}

function destroy(id) {
  return `DELETE FROM student WHERE id_student = ${id}`;
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


router.get('/student/:id', async(req, res) => {
  let id =  req.params.id;
  const query = studentById(id);
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


router.post('/student', async(req, res) => {
  const body = req.body;  
  const query = add(body);

  try {
    await Connection.query(query);
    res.status(200).json({
      message: 'Datos Guardados Correctamente',
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});


router.put('/student/:id', async(req, res) => {
  let id =  req.params.id;
  const body = req.body;
  const query = update(body, id);
  try {
    await Connection.query(query);
    res.status(200).json({
      message: 'Datos Actualizados Correctamente',
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error : error.message
    })
  }
});


router.delete('/student/:id', async(req, res) => {
  let id =  req.params.id;
  const query = destroy(id);
  try {
    await Connection.query(query);
    res.status(200).json({
      message: 'Dato Eliminado Correctamente',
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error : error.message
    })
  }
});






module.exports = router;
