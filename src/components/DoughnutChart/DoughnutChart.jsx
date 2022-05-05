import { Doughnut } from 'react-chartjs-2';
import { usePeopleInSpace } from "../../contexts/PeopleInSpaceContext"; 
import React, { useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { DoughnutChartContainer } from './styles';
ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutChart (){

  const { peopleInSpace, getData } = usePeopleInSpace();

  useEffect(() => {
    getData();
  }, []);

  let craftArr = [];

  for(let i=0; i<peopleInSpace.number; i++){
      craftArr.push(peopleInSpace.people[i].craft);

      craftArr = craftArr.filter(function (value, index, array) { 
          return array.indexOf(value) === index;
      });
  }

  const chartData = {
    labels: craftArr,
    datasets: [
      {
        label: '# of Votes',
        data: [30, 70],
        backgroundColor: [
          '#FF151F',
          '#4C8CED',
        ],
        borderColor: [
          '#FF151F',
          '#4C8CED',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
      <DoughnutChartContainer>
          <h3>People in space by craft</h3>
          <Doughnut data={chartData} />
      </DoughnutChartContainer>
  )
}