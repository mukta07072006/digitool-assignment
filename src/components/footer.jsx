import React from 'react';

const footer = () => {
    return (
        <>
        <div className='bg-[#101727] px-30 py-10 grid grid-cols-5 gap-4'>
            <div>
                <h1 className='text-2xl font-bold text-white'>DigiTools</h1>
                <p className='text-sm font-light text-white'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
            </div>
            <div>
                <p className='font-semibold text-white'>Product</p>
                <ul className='text-white font-light mt-2'>
                    <li>Features</li>
                <li>Pricing</li>
                <li>Use Cases</li>
                <li>Cart</li>
                </ul>
            </div>
            <div>
                <p className='font-semibold text-white'>Sales</p>
                <ul className='text-white font-light mt-2'>
                    <li>Features</li>
                <li>Pricing</li>
                <li>Use Cases</li>
                <li>Cart</li>
                </ul>
            </div>
            <div>
                <p className='font-semibold text-white'>Contact</p>
                <ul className='text-white font-light mt-2'>
                    <li>Features</li>
                <li>Pricing</li>
                <li>Use Cases</li>
                <li>Cart</li>
                </ul>
            </div>
            <div>
                <p className='font-semibold text-white'>Service</p>
                <ul className='text-white font-light mt-2'>
                    <li>Features</li>
                <li>Pricing</li>
                <li>Use Cases</li>
                <li>Cart</li>
                </ul>
            </div>
        </div>
        </>
    );
};

export default footer;