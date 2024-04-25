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
                    'rgb(20, 20, 20)',
                    'rgb(20, 20, 20)',
                    'rgb(20, 20, 20)',
                    'rgb(20, 20, 20)',
                ],
                backgroundColor: [
                    'rgb(253, 18, 31)',
                    'rgb(23, 126, 204)',
                    'rgb(31, 187, 94)',
                    'rgb(255, 253, 57)',
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
            <Pie data={chartData} options={chartOptions} style={{width: "500px"}}/>
        </div>



        </>
    )
} 