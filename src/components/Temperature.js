import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


function Temperature({ morn, day, eve, night }) {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top'
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  const labels = ['morning', 'day', 'evening', 'night'];
  const tempData = [morn-273, day-273, eve-273, night-273];

  const data = {
    labels,
    datasets: [
      {
        label: 'Temperature',
        data: tempData,
        borderColor: '#5596f6',
        backgroundColor: 'rgba(85,150,246, 0.1)',
        lineTension: 0.4,
        fill: true,
        
      },
    ],
  };

  return (
    <div>
      <h4>Temperature</h4>
      <Line className='temperature-chart max-h-36' options={options} data={data} />
    </div>
  )
}

export default Temperature
