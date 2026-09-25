import React from 'react';

const Hero = () => {
    return (
        <div className='grid grid-cols-2 gap-5 lg:max-w-9/12 mx-auto mt-5'>
            <div className='flex flex-col text-center p-8 bg-amber-400 shadow-xl rounded-2xl' >
                <h2 className='text-2xl' >Resolved</h2>
                <span className='text-3xl'>0</span>
            </div>
            <div className='flex flex-col text-center p-8 bg-amber-600 shadow-xl rounded-2xl'>
                <h2 className='text-2xl'>In-Progress</h2>
                <span className='text-3xl'>0</span>
            </div>
        </div>
    );
};

export default Hero;