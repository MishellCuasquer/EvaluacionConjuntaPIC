import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Chart } from 'primereact/chart';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { getUsuarios, getDonaciones, getDonantes, getBeneficiarios, getDonacionBeneficiario } from '../services/api';
import './dashboard.css';


const Dashboard = () => {
  const [USUARIO, setUSUARIO] = useState([]);
  const [DONACION, setDONACION] = useState([]);
  const [DONANTE, setDONANTE] = useState([]);
  const [BENEFICIARIO, setBENEFICIARIO] = useState([]);
  const [DONACION_BENEFICIARIO, setDONACION_BENEFICIARIO] = useState([]);
  
  const [chartData, setChartData] = useState({});
  const [pieChartData, setPieChartData] = useState({});
  const [donanteChartData, setDonanteChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usuariosData = await getUsuarios();
        const donacionesData = await getDonaciones();
        const donantesData = await getDonantes();
        const beneficiariosData = await getBeneficiarios();
        const donacionBeneficiarioData = await getDonacionBeneficiario();

        setUSUARIO(usuariosData);
        setDONACION(donacionesData);
        setDONANTE(donantesData);
        setBENEFICIARIO(beneficiariosData);
        setDONACION_BENEFICIARIO(donacionBeneficiarioData);


        const donacionesPorTipo = donacionesData.reduce((acc, don) => {
          acc[don.TipoAlimento] = (acc[don.TipoAlimento] || 0) + don.Cantidad;
          return acc;
        }, {});

        setChartData({
          labels: Object.keys(donacionesPorTipo),
          datasets: [
            {
              label: 'Cantidad de Donaciones por Tipo',
              data: Object.values(donacionesPorTipo),
              backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#AB47BC'],
            }
          ]
        });


        const beneficiariosPorUbicacion = beneficiariosData.reduce((acc, ben) => {
          acc[ben.Ubicacion] = (acc[ben.Ubicacion] || 0) + 1;
          return acc;
        }, {});

        setPieChartData({
          labels: Object.keys(beneficiariosPorUbicacion),
          datasets: [
            {
              data: Object.values(beneficiariosPorUbicacion),
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F40'],
            }
          ]
        });

        const donantesPorTipo = donantesData.reduce((acc, don) => {
          acc[don.Tipo] = (acc[don.Tipo] || 0) + 1;
          return acc;
        }, {});

        setDonanteChartData({
          labels: Object.keys(donantesPorTipo),
          datasets: [
            {
              label: 'Cantidad de Donantes por Tipo',
              data: Object.values(donantesPorTipo),
              backgroundColor: ['#4CAF50', '#FF9800', '#2196F3', '#9C27B0'],
            }
          ]
        });

      } catch (err) {
        console.error('Error al obtener datos:', err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Usuarios</h1>
      <DataTable value={USUARIO}>
        <Column field="UsuarioID" header="ID" />
        <Column field="Nombre" header="Nombre" />
        <Column field="Email" header="Correo" />
      </DataTable>

      <h1>Donaciones</h1>
      <DataTable value={DONACION}>
        <Column field="DonacionID" header="ID" />
        <Column field="DonanteID" header="ID Donante" />
        <Column field="TipoAlimento" header="Tipo de Alimento" />
        <Column field="Cantidad" header="Cantidad" />
        <Column field="FechaDisponibilidad" header="Fecha de Disponibilidad" />
        <Column field="CondicionesEspeciales" header="Condiciones Especiales" />
        <Column field="Estado" header="Estado" />
      </DataTable>

      <h1>Donantes</h1>
      <DataTable value={DONANTE}>
        <Column field="DonanteID" header="ID" />
        <Column field="UsuarioID" header="ID Usuario" />
        <Column field="Tipo" header="Tipo" />
        <Column field="Ubicacion" header="Ubicacion" />
      </DataTable>

      <h1>Beneficiarios</h1>
      <DataTable value={BENEFICIARIO}>
        <Column field="BeneficiarioID" header="ID" />
        <Column field="UsuarioID" header="ID Usuario" />
        <Column field="Tipo" header="Tipo" />
        <Column field="Ubicacion" header="Ubicación" />
      </DataTable>

      <h1>Donaciones Beneficiario</h1>
      <DataTable value={DONACION_BENEFICIARIO}>
        <Column field="DonacionID" header="ID Donación" />
        <Column field="BeneficiarioID" header="ID Beneficiario" />
      </DataTable>

      {/* Gráficas */}
      <h2>Gráficas de Donaciones, Donantes y Beneficiarios</h2>
      <div className="chart-container">
        <div className="chart-box">
          <h3>Donaciones por Tipo (Gráfico de Barras)</h3>
          <Chart type="bar" data={chartData} options={{ responsive: true, maintainAspectRatio: false }} height={300} />
        </div>
        <div className="chart-box">
          <h3>Beneficiarios por Ubicación (Gráfico de Pastel)</h3>
          <Chart type="pie" data={pieChartData} options={{ responsive: true, maintainAspectRatio: false }} height={300} />
        </div>
        <div className="chart-box">
          <h3>Donantes por Tipo (Gráfico de Barras)</h3>
          <Chart type="bar" data={donanteChartData} options={{ responsive: true, maintainAspectRatio: false }} height={300} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
