import { use } from 'react';
import Card from './card.jsx'

const itemsCard = ({responses}) => {
    const data = use(responses)
    console.log(data);
    return (
        <div className='grid grid-cols-3 gap-10 pt-5 pb-20'>
            {
                data.map(item=> <Card card={item} ></Card>)
            }
        </div>
    );
};

export default itemsCard;