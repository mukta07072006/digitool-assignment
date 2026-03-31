import React from 'react';
import { toast } from 'react-toastify';


const cartCard = ({items, setCart}) => {

    const totalCart = items.reduce((sum, item)=>sum+item.Price, 0)

    const emptyCart=()=>{
        setCart([]);
        toast.error("Cart is empty")
    } 

    return (
        <div>
            <h1 className="text-xl font-semibold mb-4">Your Cart</h1>
            {
                items.map(info => <div className="bg-base-200 px-4 py-3 rounded-xl my-2 flex gap-4 items-center justify-between">
                <div className="justify-between flex gap-5 items-center">
                <div className=''>
                    
                <img className='btn rounded-full p-1' src={info.icon_url} alt="" />
                </div>
                    <div>
                        <h1 className="text-xl font-semibold">{info.Name}</h1>
                        <h1 className="text-md font-regular text-gray-600">${info.Price}</h1>
                    </div>
                </div>
                <button className="text-red-600 text-sm font-semibold cursor-pointer" onClick={() => setCart(items.filter(item => item !== info))}>Remove</button>
                </div>)
            }
            <div className="flex justify-between items-center">
                <h1 className="text-sm font-regular text-gray-500 my-3">Total:</h1>
                <h1 className="font-bold text-xl">${totalCart}</h1>
            </div>
            <div>
            <button onClick={()=>emptyCart()} className='bg-linear-to-bl from-[#4F39F6] to-[#9514FA] btn text-white font-semibold rounded-full mt-3 w-full'>Proceed to checkout</button>

            </div>
        </div>
    );
};

export default cartCard;