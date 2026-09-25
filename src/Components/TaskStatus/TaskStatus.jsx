import React from 'react';
import SolvedCard from '../Solvedcard/SolvedCard'

const TaskStatus = ({Progress}) => {
    return (
        <div className='text-2xl mt-8 w-[400px]'>
            <h1>Task Status</h1>
            <p className='text-sm'>Select a ticket to add to Task Status</p>
            <div>
                {
                    Progress.map(pross => <SolvedCard pross={pross}></SolvedCard> )
                }
            </div>
        </div>
    );
};

export default TaskStatus;