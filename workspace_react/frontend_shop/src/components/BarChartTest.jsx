import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChartTest = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  //객체 안에 key값만 적혀있는 경우
  // ex) labels => lables : labels와 같은 말  => key와 value의 값이 같으면 하나만 써도 됨

  const data = {
    labels : ['a', 'b', 'c', 'd', 'e', 'f', 'g'], 
    datasets: [
      {
        label: 'Dataset 1',
        data: [10, 20, 5, 300, 700, 150, 900],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [3, 50, 7, 600, 800, 150, 200],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };


  return (
    <div>
      <Bar 
        options={options}
        data={data}
      />
    </div>
  )
}

export default BarChartTest