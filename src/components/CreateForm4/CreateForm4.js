import React from 'react'
import BarChart from '../BarChart'
import RadarChart from '../RadarChart'
import WordCloudComponent from '../WordCloudComponent';

function CreateForm4() {
    const words = [
        { text: 'governance', value: 25 },
        { text: 'trust', value: 15 },
        { text: 'privacy', value: 50 },
        { text: 'energy', value: 40 },
        { text: 'usability', value: 10 },
        { text: 'equity', value: 15 },
        { text: 'security', value: 45 },
        { text: 'maintainability', value: 30 },
        { text: 'sense of community', value: 15 },
        { text: 'value', value: 20 },
    ];
    return (
        <div>
            <div className='grid grid-cols-2 gap-4'>
                <div>
                    <BarChart chartData={[66, 40, 20, 6, 12]} />
                </div>
                <div>
                    {/* <RadarChart chartData={[70, 90, 44, 60, 83]} /> */}
                    <WordCloudComponent words={words} />
                </div>
            </div>
        </div>
    )
}

export default CreateForm4