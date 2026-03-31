import React, { Suspense, useMemo, useState } from 'react';
import Cards from './itemsCard.jsx'
import Cart from './cart.jsx'

const ToolsSection = ({cartItems, setCartItems}) => {
  const [active, setActive] = useState('products')
  

  const promise = useMemo(() => {
    return fetch('/itemsdata.json').then(res => res.json())
  }, [])

  const toggle = () => {
    setActive(prev => (prev === 'products' ? 'cart' : 'products'))
  }

    

    return (
        <div className="px-30 mt-15 font">
            <div className='flex justify-center flex-col gap-3'>

            <h1 className="text-4xl font-bold text-center">Premium Digital Tools</h1>
            <p className="text-center ">Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
            <div className='rounded-full py-2 px-3  bg-white border border-gray-100 self-center mb-10'>
                <button onClick={()=>toggle()} className={`btn ${active==="products"? `bg-linear-to-bl from-[#4F39F6] to-[#9514FA] font-semibold text-white` : `bg-white border-none` }   mr-2  rounded-full`}>Products</button>
                <button onClick={()=>toggle()} className={`btn ${active==="cart"? `bg-linear-to-bl from-[#4F39F6] to-[#9514FA] font-semibold text-white` : `bg-white border-none` } rounded-full`}>Cart({cartItems.length})</button>
            </div>
            </div>
            
            <div>
                <Suspense fallback="loading">
                    
               { active==="products"? <Cards active={active} responses={promise} setCart={setCartItems} cart={cartItems}></Cards>:
                <Cart items={cartItems} setCart={setCartItems}></Cart>
               }
                </Suspense>
            </div>
        </div>
    );
};

export default ToolsSection;