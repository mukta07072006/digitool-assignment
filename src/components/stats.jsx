

const stats = () => {
    return (
        <div className="bg-linear-to-bl from-[#4F39F6] to-[#9514FA] px-30 py-6 flex justify-around my-15 font">
            <div className='flex flex-col'>
                <h1 className='text-5xl font-bold text-white'>50K+</h1>
                <p className="text-lg font-light text-white">Active Users</p>
            </div>
            <div className='flex flex-col'>
                <h1 className='text-5xl font-bold text-white'>200+</h1>
                <p className="text-lg font-light text-white">Premium Tools</p>
            </div>
            <div className='flex flex-col'>
                <h1 className='text-5xl font-bold text-white'>4.9</h1>
                <p className="text-lg font-light text-white">Ratings</p>
            </div>
        </div>
    );
};

export default stats;