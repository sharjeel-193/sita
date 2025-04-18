import React from 'react'
import RadarChart from '../RadarChart'

function SprintTab() {
    return (
        <div className='w-full'>
            <h2 className='text-xl font-bold text-white mb-4'>Current Sprint</h2>
            <div className='mt-4 grid grid-cols-1 md:grid-cols-2'>
                <div>

                </div>
                <div className='bg-white rounded-lg shadow-xl'>
                    <RadarChart chartData={[70, 90, 44, 60, 83]} />
                </div>
            </div>
        </div>
    )
}

export default SprintTab