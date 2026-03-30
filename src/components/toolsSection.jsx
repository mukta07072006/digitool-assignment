import React, {Suspense, useState } from 'react';
import Cards from './itemsCard.jsx'

const ToolsSection = () => {
const [active, setActive] = useState("cart")

    const toggle = ()=>{
        if (active==="products"){
            setActive("cart")
        }
        else if(active==="cart"){
            setActive("products")
        }
    }

    const responses =async()=>{
        const res = await fetch('/public/itemsdata.json')
        return (res.json())
    }

    const promise = responses();

    

    

    return (
        <div className='px-30 mt-15'>
            <div className='flex justify-center flex-col gap-3'>

            <h1 className="text-4xl font-bold text-center">Premium Digital Tools</h1>
            <p className='text-md font-light text-center'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
            <div className='rounded-full py-2 px-3  bg-white border border-gray-100 self-center mb-10'>
                <button onClick={()=>toggle()} className={`btn ${active==="products"? `bg-linear-to-bl from-[#4F39F6] to-[#9514FA] font-semibold text-white` : `bg-white border-none` }   mr-2  rounded-full`}>Products</button>
                <button onClick={()=>toggle()} className={`btn ${active==="cart"? `bg-linear-to-bl from-[#4F39F6] to-[#9514FA] font-semibold text-white` : `bg-white border-none` } rounded-full`}>Cart()</button>
            </div>
            </div>
            
            <div>
                <Suspense fallback="loading">
                    
                <Cards responses={promise}></Cards>
                </Suspense>
            </div>
        </div>
    );
};

export default ToolsSection;