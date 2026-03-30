import React from 'react';
import { IoCartOutline } from 'react-icons/io5';

const Header = () => {
    return (
        <div className='flex justify-between px-30 border border-gray-300 py-5 items-center font'>
            <h1 className='text-4xl font-bold'>DigiTools</h1>
            <ul className='flex gap-5 items-center'>
                <li>Products</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Testimonials</li>
                <li>FAQ</li>
            </ul>
            <div className='flex gap-3 items-center'>
                <IoCartOutline/>
                <button className='btn rounded-full'>Log In</button>
                <button className='bg-linear-to-bl from-[#4F39F6] to-[#9514FA] btn text-white font-semibold rounded-full'>Getting Started</button>
            </div>
        </div>
    );
};

export default Header;