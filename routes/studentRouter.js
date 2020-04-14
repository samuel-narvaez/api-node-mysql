const express = require('express');
const router = express.Router();
const Connection = require('../config/connection');
const { querysDataBase } = require("../models/studentModel");

router.get('/', async(req, res) => {
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
      error 
    })
  }
});


router.get('/:id', async(req, res) => {
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
      error 
    })
  }
});


router.post('/', async(req, res) => {
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


router.put('/:id', async(req, res) => {
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
      error
    })
  }
});


router.delete('/:id', async(req, res) => {
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
      error 
    })
  }
});

module.exports = router;

