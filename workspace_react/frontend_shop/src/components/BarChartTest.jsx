import React, { useEffect, useState } from 'react'
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
import axios from 'axios';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChartTest = () => {

  const [date, setDate] = useState([])

  const [sales, setSales] = useState([])

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

  useEffect(() => {
    axios.get('/api/buys/date')
    .then(res => setDate(res.data))
    .catch();
  }, [])

  useEffect(() => {
    axios.get('/api/buys/sales')
    .then(res => setSales(res.data))
    .catch()
  }, [])

  //객체 안에 key값만 적혀있는 경우
  // ex) labels => lables : labels와 같은 말  => key와 value의 값이 같으면 하나만 써도 됨

  const data = {
    labels : date, 
    datasets: [
      {
        label: 'Dataset 1',
        data: sales,
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