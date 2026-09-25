import React from 'react';
import { Circle } from "lucide-react";
const Customar = ({customar}) => {
    const {id,problemHeading,shortDescription,date,status,priority,name}= customar
    return (
        <div className='p-3 shadow-sm mt-2'>
           <div className='flex gap-2 justify-between items-center'>
             <h1 className='text-xl font-semibold'>{problemHeading}</h1>
             <button className='flex gap-2 border p-2 rounded-4xl bg-green-500 text-white shadow-xl'><span><Circle /></span>Open</button>
           </div>

           <div>
            <p>{shortDescription}</p>
           </div>
           <div className='flex justify-between gap-3'>
            <div className='flex gap-5'>
                <p>{id}</p>
                <p className='text-red-400 font-semibold'>{priority}</p>
            </div>
            <div className='flex gap-5'>
                <p>{name}</p>
                <p>{date}</p>
            </div>
           </div>

        </div>
    );
};

export default Customar;