import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { DoughnutChartContainer } from './styles';
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['ISS', 'Shenzhou 13'],
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

export function DoughnutChart (){
    return (
        <DoughnutChartContainer>
            <h3>People in space by craft</h3>
            <Doughnut data={data} />
        </DoughnutChartContainer>
    )
}