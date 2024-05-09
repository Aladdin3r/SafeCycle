import { Pie } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import { useEffect, useState } from 'react'

ChartJS.register(
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
)
export default function BarChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["Road Related", "Sports Related", "Slipping/Impacts from Falling", "Other",],
            datasets:[
                {
                    label: '# of Votes',
                    data: [35, 10, 40, 5,],
                    borderColor: [
                        'rgb(173, 186, 98)',
                        'rgb(241, 201, 98)',
                        'rgb(244, 159, 62)',
                        'rgb(224, 109, 67)',
                ],
                backgroundColor: [
                    'rgb(173, 186, 98)',
                    'rgb(241, 201, 98)',
                    'rgb(244, 159, 62)',
                    'rgb(224, 109, 67)',
                ],
                    
                    borderWidth: 1,

                }
            ]
        })
        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Daily Revenu'
                },
                maintainAspectRatio: false,
                responsive: true,
            }
        })
    })
    return(
        <>
        
        <div>
            <Pie data={chartData} options={chartOptions} style={{width: "400px"}}/>
        </div>



        </>
    )
} 