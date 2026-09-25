import React, { useState } from 'react';
import { Menu,X } from "lucide-react";
const Navigation = () => {
    const [togle,setTogle] = useState(false)

    return (
        <header className='w-full md:flex w-9/12 mx-auto justify-between items-center lg:max-w-9/12 jus mx-auto'>
           <div onClick={()=>setTogle(!togle)} className='flex justify-between border inline-block md:hidden'>
            {
                togle=== false?<Menu/>:<X />
            }
           </div>
            <h1 className='hidden md:flex'>CS — Ticket System</h1>
            <nav className={`transition-transform duration-300 ${togle? 'translate-x-0':'-translate-x-full'} md:flex`}>
                <ul className={`md:flex gap-5`}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Changelog</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Download</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className='flex mt-5 md:hidden lg:hidden'>
                <button className='bg-amber-500 py-2 px-5 text-white'>New Ticket </button>
            </div>
            </nav>
            <div className='hidden md:flex lg:flex'>
                <button className='bg-amber-500 py-2 px-5 text-white'>New Ticket </button>
            </div>
        </header>
    );
};

export default Navigation;