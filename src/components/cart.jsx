import CartCard from './cartCard.jsx'
import { ImFilesEmpty } from "react-icons/im";

const cart = ({items, setCart}) => {
    console.log(items);
    

    return (
        <div className="bg-base-100 border-2 border-gray-100 rounded-2xl p-5 mb-20">
            {
                items.length===0? <div className="flex justify-center items-center flex-col">
                    <h1 className='text-center text-gray-500 text-xl font-bold'>Your cart is empty</h1>
                    <img className='max-w-30' src="https://cdn-icons-png.flaticon.com/512/9841/9841553.png" alt="" />
                </div> : <CartCard setCart={setCart} items={items}/>
            }
        </div>
    );
};

export default cart;