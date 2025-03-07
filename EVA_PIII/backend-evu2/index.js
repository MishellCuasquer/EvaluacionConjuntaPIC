const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sql, connectDB } = require('./dbConfig');

const app = express();
const PORT = 3001
;

app.use(bodyParser.json());
app.use(cors());


connectDB();


app.get('/usuarios', async (req, res) => {
  try {
    const result = await sql.query('SELECT * FROM Usuarios');
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
});

app.get('/donaciones', async (req, res) => {
  try {
    const result = await sql.query('SELECT * FROM Donaciones');
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener donaciones' });
  }
});

app.get('/donantes', async (req, res) => {
  try {
    const result = await sql.query('SELECT * FROM Donantes');
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener donantes' });
  }
});

app.get('/beneficiarios', async (req, res) => {
  try {
    const result = await sql.query('SELECT * FROM Beneficiarios');
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener beneficiarios' });
  }
});

app.get('/donacionBeneficiario', async (req, res) => {
    try {
        const result = await sql.query('SELECT * FROM DonacionBeneficiario');
        res.json(result.recordset);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener donaciones de beneficiarios' });
    }
});


app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
