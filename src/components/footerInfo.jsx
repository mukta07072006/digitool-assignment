import React from 'react';

const footerInfo = () => {
    return (
        <div className='bg-linear-to-bl from-[#4F39F6] to-[#9514FA] py-30 px-30 text-center font'>
            <h1 className='text-3xl text-white font-bold'>Ready to transform your workflow?</h1>
            <p className='text-white font-light text-lg mt-3'>Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.</p>
            <div className='mt-8'>
                <button className='btn bg-white text-purple-800 rounded-full shadow-none mr-3'>Explore Products</button>
                <button className='btn bg-transparent rounded-full text-white shadow-none'>View Pricing</button>
            </div>
            <p className='text-white font-light text-lg mt-3'>14-day free trial • No credit card required • Cancel anytime</p>
            
        </div>
    );
};

export default footerInfo;