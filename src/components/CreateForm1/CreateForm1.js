"use client";
import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

function CreateForm1() {
  // Initial goals and new state variables
  const [goals, setGoals] = useState(['Knowledge Sharing', 'Content Creation Assistance', 'Problem Solving']);
  const [showTextbox, setShowTextbox] = useState(false); // Control textbox visibility
  const [newGoal, setNewGoal] = useState(''); // Store new goal text

  // Function to handle adding new goal
  const handleAddGoal = () => {
    if (newGoal.trim() !== '') { // Ensure non-empty input
      setGoals([...goals, newGoal.trim()]); // Add to goals list
      setNewGoal(''); // Clear the text input
      setShowTextbox(false); // Hide the textbox
    }
  };

  return (
    <div className='w-full'>
      <form>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='md:col-span-2'>
            <div className='h-full w-full flex flex-col'>
              <label className='mb-1'>IT Product / Service Name</label>
              <input type='text' name='title' className='form-field' />
              <label className='mt-4 mb-1'>Project Description</label>
              <textarea name='description' rows={6} className='form-field' />
            </div>
          </div>
          <div className='col-span-1 w-full'>
            <div className='w-full bg-black rounded-lg p-4 shadow-xl text-center'>
              <h3 className='mb-3 text-2xl font-semibold'>Goals & Objectives</h3>
              {
                goals.map((goal, index) => (
                  <div key={`goal-${index}`} className='w-full m-2 flex flex-wrap items-center'>
                    <FaCheck color={'#78a663'} />
                    <p className='ml-3'>{goal}</p>
                  </div>
                ))
              }
              <button
                type='button' // Change button type to prevent form submission
                className='bg-primaryMain py-1 px-4 rounded-2xl hover:bg-primaryDark'
                onClick={() => setShowTextbox(true)} // Show textbox when clicking "Add New"
              >
                Add New
              </button>

              {/* Conditionally render the textbox */}
              {showTextbox && (
                <div className='mt-4 flex flex-col'>
                  <input
                    type='text'
                    placeholder='Enter new goal'
                    value={newGoal}
                    onChange={(e) => setNewGoal(e.target.value)} // Update state with input value
                    className='form-field'
                  />
                  <button
                    type='button' // To prevent form submission
                    className='bg-secondaryMain py-1 px-4 rounded-2xl hover:bg-secondaryDark mt-2'
                    onClick={handleAddGoal} // Add the new goal
                  >
                    Add Goal
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateForm1;



/** 
"use client"
import React, { useState } from 'react'
import {FaCheck} from 'react-icons/fa'
import { theme } from '../../../tailwind.config'

function CreateForm1() {
    const [goals, setGoals] = useState([
        'Knowledge Sharing',
        'Content Creation Assistance',
        'Problem Solving'
    ]);
    return (
        <div className='w-full'>
            <form>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div className='md:col-span-2'>
                        <div className='h-ful w-full flex flex-col'>
                            <label className='mb-1'>IT Product / Service Name</label>
                            <input 
                                type='text'
                                name='title'
                                className='form-field'
                            />
                            <label className='mt-4 mb-1'>Project Description</label>
                            <textarea
                                name='description'
                                rows={6}
                                className='form-field'
                            />
                        </div>
                    </div>
                    <div className='col-span-1 w-full'>
                        <div className='w-full bg-black rounded-lg p-4 shadow-xl text-center'>
                            <h3 className='mb-3 text-2xl font-semibold'>Goals & Objectives</h3>
                            {
                                goals.map((goal, index) => (
                                    <div key={`goal-${index}`} className='w-full m-2 flex flex-wrap items-center'>
                                        <FaCheck color={'#78a663'} />
                                        <p className='ml-3'>{goal}</p>
                                    </div>
                                ))
                            }
                            <button className='bg-primaryMain py-1 px-4 rounded-2xl hover:bg-primaryDark' type='submit'>
                                Add New
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateForm1
*/