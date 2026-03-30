import React from 'react';
import Icon1 from '../assets/products/design-tool.png'
import { MdOutlineDone } from "react-icons/md";


const card = ({card}) => {
    return (
        <div>
           <div className='bg-base-100 border border-gray-100 rounded-lg p-3 h-full'>
            <div className='flex justify-between '>
                <img className='btn rounded-full p-3' src={Icon1} alt="" />
                <span className='badge badge-warning badge-soft'>{card.TagType}</span>
            </div>
            <h1 className='text-2xl font-semibold my-5'>{card.Name}</h1>
            <p className='text-md font-light'>{card.Description}</p>
            <p className='font-light mt-3 mb-5'><span className='text-3xl font-bold'>{card.Price}$</span>/{card.Period}</p>
            {
                card.Features.map(feature=><p className='flex gap-3 items-center font-regular text-gray-700'><MdOutlineDone className='text-green-500'/>{feature}</p>)
            }
            <button className='bg-linear-to-bl from-[#4F39F6] to-[#9514FA] btn text-white font-semibold rounded-full mt-3 w-full text-md'>Buy Now</button>
           </div>
        </div>
    );
};

export default card;