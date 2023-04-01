import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import './LineGraph.css';
import Chart from 'chart.js/auto';
import { ChartDate, register } from 'chart.js';
register(ChartDate);

function LineGraph() {
  const [graphData, setGraphData] = useState([]);
  const [updateCount, setUpdateCount] = useState(0);
  const createMockData = () => {
    let data = [];
    let value = 50;
    for (var i = 0; i < 366; i++) {
      let date = new Date();
      date.setHours(0, 0, 0, 0,);
      date.setDate(i);
      value += Math.round((Math.random() < 0.5 ? 1 : 0) * Math.random() * 10);
      data.push({ x: date, y: value });
    }
    setGraphData(data);
  }

  useEffect(() => {
    setUpdateCount(updateCount => updateCount + 1);
  }, [graphData]);

  const options = {
    plugins: {
      legend: {
        display: false,
      },
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
        key={updateCount}
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
