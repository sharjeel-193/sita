"use client"
import { EffectsTab, ProductBacklog, ResourcesTab, SprintTab, UserStories } from '@/components';
import React, { useState } from 'react'
import userstories from '../../userstories.json'
import effects from '../../effects.json'
import productbacklog from '../../productbacklog.json'
import projects from '../../projects.json'
// import { useRouter } from 'next/navigation'

function ProjectMainPage() {
    const [selectedTab, setSelectedTab] = useState(1);
    const tabs = ['Effects', 'User Stories', 'Product Backlog', 'Sprint Backlog', 'Developer Resources']
    // const [userStories, setUserStories] = useState([
    //     {
    //         description: 'User Story 1 Statement',
    //         effect: 'Effect 1',
    //         sustainabilityCriteria: 'Criteria1'
    //     },
    //     {
    //         description: 'User Story 2 Statement',
    //         effect: 'Effect 2',
    //         sustainabilityCriteria: 'Criteria2'
    //     },
    //     {
    //         description: 'User Story 3 Statement',
    //         effect: 'Effect 3',
    //         sustainabilityCriteria: 'Criteria3'
    //     },
    // ])
    // const [effects, setEffects] = useState([
    //     {
    //         title: 'Effect 1',
    //         description: 'Effect 1 Statement',
    //         type: 'positive',
    //         dimension: 'social',
    //         categories: ['equity','trust']
    //     },
    //     {
    //         title: 'Effect 2',
    //         description: 'Effect 2 Statement',
    //         type: 'negative',
    //         dimension: 'individual',
    //         categories: ['health', 'self-awareness_and_free_will']
    //     },
    //     {
    //         title: 'Effect 3',
    //         description: 'Effect 3 Statement',
    //         type: 'positive',
    //         dimension: 'social',
    //         categories: ['equity','trust']
    //     },
    //     {
    //         title: 'Effect 4',
    //         description: 'Effect 4 Statement',
    //         type: 'negative',
    //         dimension: 'individual',
    //         categories: ['health', 'self-awareness_and_free_will']
    //     },
    //     {
    //         title: 'Effect 5',
    //         description: 'Effect 5 Statement',
    //         type: 'positive',
    //         dimension: 'social',
    //         categories: ['equity','trust']
    //     }
    // ])
    const [backlogItems, setBacklogItems] = useState([]);

    const handleSelectTab = (tabNumber) => {
        setSelectedTab(tabNumber);
    }

    const handleAddUserStory = (newUserStory) => {
        setUserStories([...userStories, newUserStory]);
    }
    const handleAddProductBacklog = (newBacklogItem) => {
        setBacklogItems([...backlogItems, newBacklogItem]);
        console.log(backlogItems)
    }
    
    return (
        <div className='w-full'>
            <div className='w-4/5 md:w-11/12 mx-auto'>
                <h1 className="text-5xl text-lightGray mt-16">Project <span className="text-primaryMain">Whisper</span></h1>
                <p className='mb-12 mt-4 text-white'>Whisper (Generative Pre-trained Transformer 3) is a state-of-the-art language processing AI model developed by OpenAI. It is capable of understanding and generating human-like text based on the input it receives. GPT-3 has a wide range of applications, including text generation, translation, summarization, and more.</p>
                <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                    {
                        tabs.map((tabItem, index) => (
                            <li class="me-2" key={`tab-item-${index}`} onClick={() => handleSelectTab(index)}>
                                <div aria-current="page" class={`inline-block p-4 rounded-t-lg cursor-pointer ${selectedTab === index ? 'text-primaryMain bg-gray-950' : 'hover:text-white hover:bg-gray-900'}`}>{tabItem}</div>
                            </li>
                        ))
                    }
                </ul>
                <div className='mt-4'>
                    {
                        selectedTab === 0 && <EffectsTab effects={effects} />
                    }
                    {
                        selectedTab === 1 && <UserStories stories={userstories} effects={effects} handleAddUserStory={handleAddUserStory} />
                    }
                    {
                        selectedTab === 2 && <ProductBacklog stories={userstories} backlogItems={productbacklog} handleAddProductBacklog={handleAddProductBacklog} />
                    }
                    {
                        selectedTab === 3 && <SprintTab />
                    }
                    {
                        selectedTab === 4 && <ResourcesTab />
                    }
                </div>

            </div>
        </div>
    )
}

export default ProjectMainPage