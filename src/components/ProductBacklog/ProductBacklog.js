"use client"
import React, {useEffect, useState} from 'react'
import Select from 'react-select'

function ProductBacklog(props) {
    const { backlogItems, stories, handleAddProductBacklog } = props
    const [selectOptions, setSelectOptions] = useState([])
    const [newBacklogItem, setNewBacklogItem] = useState({
        title: '',
        description: '',
        stories: []
    })
    const handleChangeNewBacklogItem = (fieldName, value) => {
        setNewBacklogItem({
            ...newBacklogItem,
            [fieldName]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newBacklogItem)
        handleAddProductBacklog(newBacklogItem);
        
    }

    useEffect(() => {
        setSelectOptions(
            stories.map((story, index) => ({
                label: `User Story ${index + 1}`,
                value: story.description
            }))
        );
    }, [stories]);

    return (
        <div className='w-full'>
            <h2 className='text-xl font-bold text-white mb-4'>Product Backlog</h2>
            <div className='bg-gray-600 w-full shadow-xl rounded-xl p-4'>
                <form onSubmit={handleSubmit}>
                    <textarea
                        rows={2}
                        name='description'
                        className='text-white w-full form-field'
                        placeholder='Write backlog description Here'
                        onChange={(e) => handleChangeNewBacklogItem('description', e.target.value)}
                    />
                    <p className='mt-4 font-bold text-white'>User Story in this backlog</p>
                    <div className='w-full flex items-center justify-between flex-wrap'>
                        <Select options={selectOptions} isMulti className='flex-1 min-h-sm' onChange={(e) => handleChangeNewBacklogItem('stories', e.map((option) => option.label))} />
                        <button className='w-fit rounder-lg bg-primaryLight hover:bg-primaryMain px-4 py-2 rounded-md ml-4 my-2' type='submit'>
                            Add new Product Backlog
                        </button>
                    </div>
                </form>
            </div>
            <div className='w-full'>
                {
                    backlogItems.map((backlog, backlogIndex) => (
                        <div key={`backlog-item-${backlogIndex}`} className='border-2 border-solid border-lightGray rounded-lg p-4 m-2 text-white'>
                            <p className='text-lg font-bold'>Backlog {backlogIndex+1}</p>
                            <p>{backlog.description}</p>
                            <p className='text-lg font-bold mt-2'>Stories</p>
                            <p>User Story 1, User Story 2</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductBacklog