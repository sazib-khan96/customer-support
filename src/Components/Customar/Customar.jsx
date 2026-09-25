import React from 'react';
import { Circle,CalendarDays  } from "lucide-react";
const Customar = ({customar,Progress,setProgress}) => {
    
     const progressPlus =(customer)=>{
          const newProgress = [...Progress,customer]
          setProgress(newProgress)
     }

    const {id,problemHeading,shortDescription,date,status,priority,name}= customar
    return (
        <div onClick={()=> progressPlus(customar)} className='p-3 shadow-sm mt-2 text-sm cursor-pointer'>
           <div className='flex gap-2 justify-between items-center'>
             <h1 className='text-xl font-semibold'>{problemHeading}</h1>
             <button className='flex gap-2 border p-2 rounded-4xl bg-green-500 text-white shadow-xl'><span><Circle /></span>Open</button>
           </div>

           <div className='my-3'>
            <p>{shortDescription}</p>
           </div>
           <div className='flex justify-between gap-3'>
            <div className='flex gap-5'>
                <p>{id}</p>
                <p className='text-red-400 font-semibold '>{priority}</p>
            </div>
            <div className='flex gap-5'>
                <p>{name}</p>
                <p className='flex gap-2 items-center'><span><CalendarDays /></span> {date}</p>
            </div>
           </div>

        </div>
    );
};

export default Customar;