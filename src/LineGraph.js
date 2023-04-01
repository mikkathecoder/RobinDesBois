import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import { LineController, PointElement, LineElement, LinearScale, CategoryScale } from 'chart.js';

// Register required controllers, elements, and scales
Chart.register(LineController, PointElement, LineElement, LinearScale, CategoryScale);

function LineGraph() {
  
  const labels = Array.from({ length: 3 }, (_, i) => i);

  const data = [
    {
      x: 0,
      y: 0,
    },
    {
      x: 1,
      y: 5,
    },
    {
      x: 2,
      y: 4
    },
    {
      x: 3,
      y: 7
    }
  ];

  const options = {
    plugins: {
        tooltip: {
          enabled: true,
        },
      },
      interaction: {
        mode: 'nearest',
        intersect: false,
        axis: 'x',
      },
    scales: {
      x: {
        type: 'linear', 
        display: false,
        title: {
          display: true,
          text: 'X Axis Label',
        },
      },
      y: {
        display: false,
        title: {
          display: true,
          text: 'Y Axis Label',
        },
      },
    },
  };

  return (
    <div className="linegraph">
      <Line 
        data={{
            labels: labels,
            datasets: [
              {
                data: data,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(255,0,0,1)",
                borderWidth: 2,
                pointRadius: 0,
                pointBorderColer: "rgba(0, 0, 0, 0)",
                pointBackgroundColor: 'rgba (0, 0, 0, 0)',
                pointHoverBackgroundColor: 'rgba(255, 0, 0, 1)',
                pointHoverBorderColor: '#000000',
                pointHoverBorderWidth: 4,
                pointHoverRadius: 6,
              },
            ],
        }}
        options={options} 
        />
    </div>
  );
}

export default LineGraph;