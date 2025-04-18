"use client"
import React, { useEffect } from 'react'
import { Chart } from "chart.js";

function RadarChart(props) {
    const { chartData } = props
    useEffect(() => {
        var ctx = document.getElementById('radarChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ["Individual", "Social", "Economic", "Environment", "Technical"],
                datasets: [
                    {
                        data: chartData,
                        label: "Sustainability target",
                        borderColor: "#3e95cd", // Change the color of the web lines for the second dataset
                        backgroundColor: "rgb(60,186,159,0.1)",
                        borderWidth: 2,
                    },
                ]
            },
            options: {
                scales: {
                    xAxes: [{
                        display: false,
                    }],
                }},
        });
    }, [chartData])
    return (
        <div>
            <div className="w-full flex mx-auto my-auto">
                <div className='border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl'>
                    <canvas id='radarChart'></canvas>
                </div>
            </div>
        </div>
    )
}

export default RadarChart