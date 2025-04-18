"use client"
import React, { useEffect } from "react"
import { Chart } from "chart.js";

function BarChart(props) {
    const { chartData } = props
    useEffect(() => {
        var ctx = document.getElementById('barChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Individual", "Social", "Economic", "Environment", "Technical"],
                datasets: [{
                    data: chartData,
                    label: "Count",
                    borderColor: "rgb(75, 192, 192)",
                    backgroundColor: [
                        "rgba(109, 253, 181, 0.5)",
                        "rgba(75, 192, 192, 0.5)",
                        "rgba(255, 205, 86, 0.5)",
                        "rgba(255, 99, 132, 0.5)",
                        "rgba(255, 159, 64, 0.5)"
                    ],
                    borderWidth: 2,
                    barPercentage: 0.5
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }, [chartData])
    return (
        <div>
            {/* <h1 className="w-[150px] mx-auto mt-10 text-xl font-semibold capitalize ">Bar Chart</h1> */}
            <div className="w-full flex mx-auto my-auto">
                <div className='border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl'>
                    <canvas id='barChart'></canvas>
                </div>
            </div>
        </div>
    )
}

export default BarChart