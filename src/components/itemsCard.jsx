import { use } from 'react';
import Card from './card.jsx'

const itemsCard = ({responses, setCart, cart}) => {
    const data = use(responses)
    console.log(data);
    return (
        
        <div className='grid grid-cols-3 gap-10 pt-5 pb-20'>
            {
                data.map(item=> <Card key={item.id} card={item} setCart={setCart} cart={cart}></Card>)
            }
        </div>
    );
};

export default itemsCard;