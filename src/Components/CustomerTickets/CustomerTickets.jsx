import React, { use } from 'react';
import Customar from '../Customar/Customar'

const CustomerTickets = ({customarData,Progress,setProgress}) => {
    const Data = use(customarData)
    
    return (
        <div className='text-2xl mt-8'>
            <h1>Customer Tickets</h1>
            <div className='grid grid-cols-2 gap-3 w-[1000px]'>
            {
                Data.map(customar => <Customar Progress={Progress} setProgress={setProgress} key={customar.id} customar={customar}></Customar> )
            }
        </div>
        </div>
    );
};

export default CustomerTickets;