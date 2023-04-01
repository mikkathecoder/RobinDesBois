import React, { useEffect, useState} from 'react';
import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import 'chartjs-adapter-date-fns';

function LineGraph() {
  
  const [graphData, setGraphData] = useState([]);
  const labels = Array.from({ length: 366 }, (_, i) => i);
  const generateDataPoints = (length) => {
    let data = [
      { x: new Date(2023, 0, 1), y: 0 },
      { x: new Date(2023, 0, 2), y: 5 },
      { x: new Date(2023, 0, 3), y: 4 },
      { x: new Date(2023, 0, 4), y: 7 },
    ];
  
    for (let i = 4; i < length; i++) {
      let x = new Date(2023, 0, i + 1);
      let y = data[i - 1].y + Math.round(Math.random() * 10 - 5);
      data.push({ x: x, y: y });
    }
  
    return data;
  };
  

const data = generateDataPoints(366);


const createMockData = () => {
    let data = [];
    let value = 50;
    for(var i = 0; i < 366; i++){
        let date = new Date();
        date.setHours(0,0,0,0,);
        date.setDate(i);
        value += Math.round((Math.random() < 0.5 ? 1 : 0) * Math.random() * 10);
        data.push({x: date, y: value});
    }
    setGraphData(data);
}

useEffect(()=>{
    createMockData();
}, [])
const options = {
    plugins: {
      tooltip: {
        enabled: true,
        mode: 'nearest',
        intersect: false,
        position: 'nearest',
        callbacks: {
          title: (tooltipItems) => {
            const date = tooltipItems[0].raw.x;
            return `Date: ${date.toLocaleDateString()}`;
          },
          label: (tooltipItem) => {
            const value = tooltipItem.raw.y;
            return `Value: ${value}`;
          },
        },
      },
    },
    scales: {
      x: {
        type: 'time',
        time: {
          parser: 'MM/dd/yyyy',
          tooltipFormat: 'MM/dd/yyyy',
        },
        display: false,
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        display: false,
        title: {
          display: true,
          text: 'Value',
        },
      },
    },
  };
  
  
  
  
  
  

  
  

  return (
    <div className="linegraph">
      <Line 
        data={{
           
            datasets: [
              {
                data: graphData,
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