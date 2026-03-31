import React from 'react';
import { IoCartOutline } from 'react-icons/io5';

const Header = ({cartItems}) => {
    return (
        <div className='flex justify-between px-30 border border-gray-300 py-5 items-center font'>
            <h1 className='text-4xl font-bold tracking-tight 
                   bg-linear-to-bl from-[#4F39F6] to-[#9514FA] 
                   bg-clip-text text-transparent'>DigiTools</h1>
            <ul className='flex gap-5 items-center'>
                <li>Products</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Testimonials</li>
                <li>FAQ</li>
            </ul>
            <div className='flex gap-3 items-center'>
                <div className='relative'>

                <IoCartOutline/>
                <div className='w-3 h-3 text-[9px] text-center bg-red-600 rounded-full text-white font-bold absolute top-0 right-0'>{cartItems.length}</div>
                </div>
                <button className='btn rounded-full'>Log In</button>
                <button className='bg-linear-to-bl from-[#4F39F6] to-[#9514FA] btn text-white font-semibold rounded-full'>Getting Started</button>
            </div>
        </div>
    );
};

export default Header;