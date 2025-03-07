const sql = require('mssql');

const dbConfig = {
  user: 'sa', 
  password: '123', 
  server: 'localhost', 
  database: 'DonacionesAlimentos1', 
  options: {
    encrypt: true, 
    trustServerCertificate: true, 
  },
};

const connectDB = async () => {
  try {
    await sql.connect(dbConfig);
    console.log('Conexión exitosa a SQL Server');
  } catch (err) {
    console.error('Error al conectar con SQL Server:', err.message);
  }
};

module.exports = { sql, connectDB };
