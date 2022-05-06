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

  let craftArr = [],
  numbersArr = [],
  percentageArr = [];

  for(let i=0; i<peopleInSpace.number; i++){
      craftArr.push(peopleInSpace.people[i].craft);

      craftArr = craftArr.filter(function (value, index, array) { 
          return array.indexOf(value) === index;
      });
  }

  const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

  let currentCraft;
 
    // get array with number of people by craft
    for(let i=0; i<craftArr.length; i++){
      currentCraft = countOccurrences(craftArr, craftArr[i]);
      numbersArr.push(currentCraft);
    }

    // get array with percentage by craft
    for(let i=0; i<numbersArr.length; i++){
      currentCraft = (numbersArr[i] / craftArr.length) * 100;
      percentageArr.push(currentCraft);
    }

  const chartData = {
    labels: craftArr,
    datasets: [
      {
        label: '# of Votes',
        data: percentageArr,
        backgroundColor: [
          '#FF151F',
          '#4C8CED',
          '#8c4ced',
          '#4ced8f',
        ],
        borderColor: [
          '#FF151F',
          '#4C8CED',
          '#8c4ced',
          '#4ced8f',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
      <DoughnutChartContainer className='chart-container'>
          <h3>People in space by craft</h3>
          <Doughnut data={chartData} />
      </DoughnutChartContainer>
  )
}