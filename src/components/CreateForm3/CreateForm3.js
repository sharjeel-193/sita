"use client"
import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { Tooltip } from 'react-tooltip'
import { IoMdInformationCircleOutline } from "react-icons/io";

function CreateForm3(props) {
    const { susafDimensions }  = props
    const [effects, setEffects] = useState([
        {
            description: 'Effect 1 Statement',
            type: 'positive',
            dimension: 'social',
            categories: ['equity','trust']
        },
        {
            description: 'Effect 2 Statement',
            type: 'negative',
            dimension: 'individual',
            categories: ['health', 'self-awareness_and_free_will']
        }
    ])

    const handleEffectChange = (effectIndex, fieldName, value) => {
        setEffects(
            effects.map((effect, index) =>
                index === effectIndex ? { ...effect, [fieldName]: value } : effect
            )
        );
    };

    const handleCategoryToggle = (effectIndex, category) => {
        const effect = effects[effectIndex];
        const categoryIndex = effect.categories.indexOf(category.categoryName.toLowerCase().replace(' ', '_'));
        if (categoryIndex === -1) {
            setEffects(
                effects.map((effect, index) =>
                    index === effectIndex ? { ...effect, categories: [...effect.categories, category.categoryName.toLowerCase().replace(' ', '_')] } : effect
                )
            );
        } else {
            setEffects(
                effects.map((effect, index) =>
                    index === effectIndex ? { ...effect, categories: effect.categories.filter((categoryItem) => categoryItem !== category.categoryName.toLowerCase().replace(' ', '_')) } : effect
                )
            );
        }
    };

    return (
        <div className='w-full'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className='col-span-2'>
                    <div className='w-full'>
                        {
                            effects.map((effect, effectIndex) => (
                                <div key={`effect-finalized-${effectIndex}`} className='w-full m-3 p-3 rounded-lg border-2 border-solid border-lightGray finalized-effect-card'>
                                    <div className='flex justify-between items-center'>
                                        <h3 className='text-2xl font-semibold'>Effect {effectIndex + 1}</h3>
                                        <p className={`w-fit rounded-xl uppercase text-xs px-2 ${effect.type === 'positive' ? 'bg-green-600' : 'bg-red-600'}`}>{effect.type}</p>
                                    </div>
                                    <p>{effect.description}</p>

                                    <div className='flex items-center mt-3 mb-2'>
                                        <h4 className='mr-2 font-bold'>Dimension: </h4>
                                        <select  className='bg-background border-2 border-solid border-lightGray p-2 rounded-md' onChange={(e) => handleEffectChange(effectIndex, 'dimension', e.target.value)} value={effect.dimension}>
                                            {
                                                Object.entries(susafDimensions).map(([key, value], dimensionIndex) => (
                                                    <option key={`dimension-option-${dimensionIndex}`} option={key}>
                                                        {key}
                                                    </option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <h4 className='mr-2 font-bold'>Categories: </h4>
                                    <div className='flex items-center flex-wrap'>
                                        {
                                            susafDimensions[effect.dimension].map((category, categoryIndex) => (
                                                <div key={`effect-category-${categoryIndex}`} className='m-1'>
                                                    <div 
                                                        data-tooltip-id={`effect-category-chip-${categoryIndex}`} 
                                                        className={`shadow-lg w-fit rounded-xl uppercase text-xs px-4 py-2 border-solid border-2  flex items-center cursor-pointer ${effect.categories.includes(category.categoryName.toLowerCase().replace(' ', '_')) ? 'border-white text-white' : 'border-gray-500 text-gray-500'}`}
                                                        onClick={() => handleCategoryToggle(effectIndex, category)}
                                                    >
                                                        <span className='mr-2'>
                                                            {category.categoryName}
                                                        </span>
                                                        <IoMdInformationCircleOutline />
                                                    </div>
                                                    
                                                    <Tooltip id={`effect-category-chip-${categoryIndex}`} place='bottom' content={category.categoryDescription} className='max-w-md' />
                                                </div>
                                            ))
                                        }
                                    </div>
                                    

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateForm3