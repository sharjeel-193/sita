"use client"
import React, { useState } from 'react'

function UserStories(props) {
    const { stories, effects, handleAddUserStory } = props
    const [newStory, setNewStory] = useState({
        description: '',
        effect: '',
        sustainabilityCriteria: ''
    })

    const handleChangeNewStory = (fieldName, e) => {
        e.preventDefault();
        setNewStory({
            ...newStory,
            [fieldName]: e.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleAddUserStory(newStory);
    };

    return (
        <div className='w-full'>
            <div className='bg-gray-600 w-full shadow-xl rounded-xl p-4'>
                <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                            <textarea
                                rows={5}
                                name='description'
                                className='text-white w-full form-field bg-white'
                                placeholder='Enter User Story'
                                onChange={(e) => handleChangeNewStory('description', e)}
                            />
                        </div>
                        <div>
                            <textarea
                                rows={5}
                                name='sustainability_criteria'
                                className='text-white w-full form-field bg-white'
                                placeholder='Enter Sustainability Criteria'
                                onChange={(e) => handleChangeNewStory('sustainabilityCriteria', e)}
                            />
                        </div>
                        <div>
                            <select className='w-full form-field text-white py-6 h-full' onChange={(e) => handleChangeNewStory('effect', e)}>
                                {
                                    effects.map((effect, index) => (
                                        <option key={`effect-option-${index}`} value={`Effect ${index+1}`}>
                                            {`Effect ${index+1}`}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                        <div>
                            <button className='w-full rounder-lg bg-primaryLight hover:bg-primaryMain p-2 rounded-md' type='submit'>
                                Add new User Story
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className='w-full grid grid-cols-2 gap-4 my-4'>
                {stories && stories.map((story, index) => (
                    <div key={`user-story-${index}`} className='border-2 border-solid border-lightGray rounded-lg p-4 m-2 text-white'>
                        <p className='text-lg font-bold'>User story {index+1}</p>
                        <p>{story.description}</p>
                        {/* <p className='text-lg font-bold mt-2'>Sustainability Criteria</p>
                        <p>{story.sustainability_criteria}</p> */}
                        <p className='text-lg font-bold mt-2'>Effect</p>
                        <p>{effects.filter((item) => item.id === story.effects_id)[0]['title']}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserStories