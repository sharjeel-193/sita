"use client"
import React, { useState } from 'react'
import { ImCross } from "react-icons/im";


function CreateForm2() {
    const [effectType, setEffectType] = useState('positive')
    const [newEffectText, setNewEffectText] = useState('')
    const [effects, setEffects] = useState([
        {
            description: 'Time saving, opportunity to increase personal knowledge and find resources on particular subjects.',
            type: 'positive',
            title: 'Effect 1'
        },
        {
            description: 'Easy and equal access to shared knowledge. ',
            type: 'positive',
            title: 'Effect 2'
        },
        {
            description: 'Negative effect in the environment due to data centers ',
            type: 'negative',
            title: 'Effect 3'
        },
        {
            description: 'Ethical concerns and the potential for bias',
            type: 'negative',
            title: 'Effect 4'
        },
    ])
    

    const handleChangeEffectType = (e) => {
        e.preventDefault()
        setEffectType(e.target.value)
    }

    const handleChangeEffectDescription = (e) => {
        e.preventDefault()
        setNewEffectText(e.target.value)
    }

    const handleDeleteEffect = (effectIndex) => {
        setEffects(effects.filter((effect, i) => i !== effectIndex))
    }

    const handleAddEffect = (e) => {
        e.preventDefault()
        const newEffect = {
            description: newEffectText,
            type: effectType
        }
        setEffects([
            ...effects,
            newEffect
        ])
        setNewEffectText('')
    }
    
    return (
        <div className='w-full'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className='col-span-2'>
                    <div className='w-full flex flex-col'>
                        <p className='mb-2'>Write Immediate Effects that come to your Mind</p>
                        <div>
                            <form className='flex'>
                                <textarea
                                    rows={3}
                                    name='effect-description'
                                    placeholder='Write Your Effect Here'
                                    className='form-field w-96'
                                    value={newEffectText}
                                    onChange={handleChangeEffectDescription}
                                />
                                <div className='ml-4'>
                                    <div class="flex items-center mb-4">
                                        <input id="postive-radio" defaultChecked type="radio" value="positive" name="effect-type-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={handleChangeEffectType} />
                                        <label htmlFor="positive-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Positive</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input id="negative-radio" type="radio" value="negative" name="effect-type-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={handleChangeEffectType} />
                                        <label htmlFor="negative-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Negative</label>
                                    </div>
                                </div>
                                <button className='bg-primaryMain py-1 px-2 h-fit rounded-2xl hover:bg-primaryDark ml-4 w-fit' onClick={handleAddEffect}>
                                    + Click to Add
                                </button>
                            </form>
                        </div>
                        <div>
                            <h3 className='mb-3 text-2xl font-semibold mt-4'>Added Effects List</h3>
                            {
                                effects.map((effect, index) => (
                                    <div key={`effect-${index}`} className=' p-2 rounded-lg border-2 border-solid border-lightGray m-2 effect-card'>
                                        <div className='w-full flex justify-between items-center'>
                                            <p className={`w-fit rounded-xl uppercase text-xs px-2 ${effect.type === 'positive' ? 'bg-green-600' : 'bg-red-600'}`}>{effect.type}</p>
                                            <div className='effect-cross-icon' onClick={() => handleDeleteEffect(index)}>
                                                <ImCross />
                                            </div>
                                        </div>
                                        <p className='text-lg font-bold mt-2'>{effect.title}</p>
                                        <p className='mb-0'>
                                            {effect.description}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateForm2