import React from 'react';
import {UserRound,CalendarDays } from "lucide-react";

const SolvedCard = ({pross,resolved,setResolved}) => {

    const resolvedCardPlus =(ress)=>{
            const newresoved = [...resolved,ress]
            setResolved(newresoved);
           
    }
    
    return (
        <div className='p-3 bg-gray-50 text-sm border border-gray-100 shadow-sm my-3 rounded-2xl'>
            <h1 className='text-xl flex items-center gap-2'><span><UserRound /></span>{pross.name}</h1>
            <p className='mt-2 flex items-center gap-2'> <span><CalendarDays /></span>{pross.date}</p>
            <button onClick={()=> resolvedCardPlus(pross)}  className='p-3 w-full bg-green-500 text-white font-semibold rounded-4xl mt-5 cursor-pointer '>Complete</button>
        </div>
    );
};

export default SolvedCard;