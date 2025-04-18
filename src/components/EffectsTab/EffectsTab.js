"use client"; // This is a client component
import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const EffectsTab = (props) => {
  const { effects } = props;

  // Initialize the state with the incoming effects and map title and description
  const [effectList, setEffectList] = useState(
    effects.map((effect, index) => ({
      id: index,
      title: effect.title,
      description: effect.description,
    }))
  );

  useEffect(() => {
    // Update the effect list if props change
    setEffectList(
      effects.map((effect, index) => ({
        id: index,
        title: effect.title,
        description: effect.description,
      }))
    );
  }, [effects]);

  // Function to move an item up in the list
  const moveUp = (index) => {
    if (index <= 0) return; // Cannot move the first item up
    const newItems = [...effectList];
    const temp = newItems[index - 1];
    newItems[index - 1] = newItems[index];
    newItems[index] = temp;
    setEffectList(newItems);
  };

  // Function to move an item down in the list
  const moveDown = (index) => {
    if (index >= effectList.length - 1) return; // Cannot move the last item down
    const newItems = [...effectList];
    const temp = newItems[index + 1];
    newItems[index + 1] = newItems[index];
    newItems[index] = temp;
    setEffectList(newItems);
  };

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-white">EFFECTS</h2>
      <div className="flex flex-col">
        {effects.map((effect, index) => (
          <div
            key={effect.id}
            className="flex items-center p-4 bg-gray-200 my-2"
          >
            <div className="flex-1"> 
              <h3 className="text-lg font-bold">{effect.title}</h3>  {/* Display the title */}
              <p className={`w-fit rounded-xl uppercase text-xs px-2 ${effect.type === 'Positive' ? 'bg-green-600' : 'bg-red-600'}`}>{effect.type}</p>
              <p>{effect.description}</p>  {/* Display the description */}
            </div>

            <div className="ml-auto flex space-x-2">
              <button
                onClick={() => moveUp(index)}
                disabled={index === 0} // Disable the button for the first item
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
              >
                <FaArrowUp />
              </button>

              <button
                onClick={() => moveDown(index)}
                disabled={index === effectList.length - 1} // Disable the button for the last item
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
              >
                <FaArrowDown />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EffectsTab;


/** 
"use client"; // This is a client component
import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const EffectsTab = (props) => {
  const { effects } = props;

  // Initialize the state with the incoming effects descriptions
  const [effectList, setEffectList] = useState(
    effects.map((effect, index) => ({
      id: index,
      text: effect.description,
    }))
  );

  useEffect(() => {
    // Update the effect list if props change
    setEffectList(
      effects.map((effect, index) => ({
        id: index,
        text: effect.description,
      }))
    );
  }, [effects]);

  // Function to move an item up in the list
  const moveUp = (index) => {
    if (index <= 0) return; // Cannot move the first item up
    const newItems = [...effectList];
    const temp = newItems[index - 1];
    newItems[index - 1] = newItems[index];
    newItems[index] = temp;
    setEffectList(newItems);
  };

  // Function to move an item down in the list
  const moveDown = (index) => {
    if (index >= effectList.length - 1) return; // Cannot move the last item down
    const newItems = [...effectList];
    const temp = newItems[index + 1];
    newItems[index + 1] = newItems[index];
    newItems[index] = temp;
    setEffectList(newItems);
  };

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-white">EFFECTS</h2>
      <div className="flex flex-col">
        {effectList.map((effect, index) => (
          <div
            key={effect.id}
            className="flex items-center p-4 bg-gray-200 my-2"
          >
            <span className="mr-2">{effect.text}</span>

            <div className="ml-auto flex space-x-2">
              <button
                onClick={() => moveUp(index)}
                disabled={index === 0} // Disable the button for the first item
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
              >
                <FaArrowUp />
              </button>

              <button
                onClick={() => moveDown(index)}
                disabled={index === effectList.length - 1} // Disable the button for the last item
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
              >
                <FaArrowDown />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EffectsTab;

*/



/** 
import React from 'react'

function EffectsTab(props) {
    const { effects } = props
    return (
        <div className='w-full'>
            <h2 className='text-xl font-bold text-white'>EFFECTS</h2>
        </div>
    )
}

export default EffectsTab
*/