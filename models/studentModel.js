function querysDataBase(action, id, data) {
    switch (action) {
      case 'create':
        query = `INSERT INTO student (nombres, apellidos, cedula) VALUES ('${data.nombres}','${data.apellidos}',${data.cedula} )`;
        break;
      case 'read':
        query = `SELECT * FROM student`;
        break;
      case 'update':
        query = `UPDATE student SET nombres = '${data.nombres}', apellidos = '${data.apellidos}', cedula = ${data.cedula} WHERE id_student = ${id}`;
        break;
      case 'delete':
        query = `DELETE FROM student WHERE id_student = ${id}`;
        break;
      case 'found':
        query = `SELECT * FROM student WHERE id_student = ${id}`;
        break;
    }
    return query;
  }


module.exports = {
    querysDataBase
};
