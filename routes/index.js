const express = require('express');
const router = express.Router();
const Connection = require('../config/connection');

function querysDataBase(action, id, data) {
  switch (action) {
    case 'create':
      query = `INSERT INTO student (nombres, apellidos, cedula) VALUES ('${data.nombres}','${data.apellidos}',${data.cedula} )`;
      break;
    case 'read':
      query = `SELECT * FROM student`;
      break;
    case 'update':
      query = `UPDATE student SET nombres = '${data.nombres}', apellidos = '${data.apellidos}', cedula = ${data.cedula} WHERE id = ${id}`;
      break;
    case 'delete':
      query = `DELETE FROM student WHERE id = ${id}`;
      break;
    case 'found':
      query = `SELECT * FROM student WHERE id = ${id}`;
      break;
  }
  return query;
}


router.get('/student', async(req, res) => {
  const query = querysDataBase('read', null, null);
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
  const query = querysDataBase('found', id, null);
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
  const query = querysDataBase('create', null, body);

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
  const query = querysDataBase('update', id, body)

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
  const query = querysDataBase('delete', id, null);

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
