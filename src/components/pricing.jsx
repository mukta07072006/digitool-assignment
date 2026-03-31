import { MdOutlineDone } from "react-icons/md";

const pricing =()=>{
    return(

        <div className="px-30 mt-15 font text-center  py-10">
            <div className="className='flex justify-center flex-col gap-3">

            <h1 className="text-4xl font-bold text-center">Simple, Transparent Pricing</h1>
            <p className="text-md font-light text-center">Choose the plan that fits your needs. Upgrade or downgrade anytime.
            </p>
            </div>
              <div className="grid grid-cols-3 gap-6 my-15">
                    <div className="border-2 border-gray-200 rounded-xl p-8 text-start bg-base-200">
                            <h1 className="text-3xl font-bold">Starter</h1>
                            <p className="text-gray-600">Perfect for getting started</p>
                            <h1 className="text-5xl font-bold my-6">$0<span className="text-sm font-light">/Month</span></h1>
                            <p className='flex gap-3 items-center font-regular text-gray-700'><MdOutlineDone className='text-green-500'/>Access to 10 free tools</p>
                            <p className='flex gap-3 items-center font-regular text-gray-700'><MdOutlineDone className='text-green-500'/>Basic templates</p>
                            <p className='flex gap-3 items-center font-regular text-gray-700'><MdOutlineDone className='text-green-500'/>Community support</p>
                            <p className='flex gap-3 items-center font-regular text-gray-700'><MdOutlineDone className='text-green-500'/>1 project per month</p>
                            <button className="bg-linear-to-bl from-[#4F39F6] to-[#9514FA] btn text-white font-semibold rounded-full w-full mt-6">Get Started for Free</button>
                    </div>
                    <div className="border-2 border-gray-200 rounded-xl p-8 text-start bg-linear-to-bl from-[#4F39F6] to-[#9514FA] relative">
                            <div className="bg-yellow-100 text-yellow-800 rounded-full text-sm font-bold text-center max-w-fit px-3 absolute  left-32 -top-3">
                                    Most Popular
                                </div>
                            <h1 className="text-3xl font-bold text-white">Pro</h1>
                            <p className="text-white">Best for professionals</p>
                            <h1 className="text-5xl font-bold my-6 text-white">$29<span className="text-sm font-light">/Month</span></h1>
                            <p className='flex gap-3 items-center font-regular text-white'><MdOutlineDone className='text-white'/>Access to 10 free tools</p>
                            <p className='flex gap-3 items-center font-regular text-white'><MdOutlineDone className='text-white'/>Basic templates</p>
                            <p className='flex gap-3 items-center font-regular text-white'><MdOutlineDone className='text-white'/>Community support</p>
                            <p className='flex gap-3 items-center font-regular text-white'><MdOutlineDone className='text-white'/>1 project per month</p>
                            <button className="bg-white btn text-indigo-600 text-[15px] shadow-none font-bold rounded-full w-full mt-6">Start Pro Trials</button>
                    </div>
                    <div className="border-2 border-gray-200 rounded-xl p-8 text-start bg-base-200">
                                
                            <h1 className="text-3xl font-bold">Enterprise</h1>
                            <p className="text-gray-600">For team and buisness</p>
                            <h1 className="text-5xl font-bold my-6">$990<span className="text-sm font-light">/Month</span></h1>
                            <p className='flex gap-3 items-center font-regular text-gray-700'><MdOutlineDone className='text-green-500'/>Access to 10 free tools</p>
                            <p className='flex gap-3 items-center font-regular text-gray-700'><MdOutlineDone className='text-green-500'/>Basic templates</p>
                            <p className='flex gap-3 items-center font-regular text-gray-700'><MdOutlineDone className='text-green-500'/>Community support</p>
                            <p className='flex gap-3 items-center font-regular text-gray-700'><MdOutlineDone className='text-green-500'/>1 project per month</p>
                            <button className="bg-linear-to-bl from-[#4F39F6] to-[#9514FA] btn text-white font-semibold rounded-full w-full mt-6">Contact Sales Person</button>
                    </div>
              </div>
        </div>


    )}

export default pricing;