import icon1 from "../assets/package.png"
import icon2 from "../assets/user.png"
import icon3 from "../assets/rocket.png"

const stepSection =()=>{

    return(

        <div className="px-30 mt-15 font text-center bg-base-200 py-10">
            <div className="className='flex justify-center flex-col gap-3">

            <h1 className="text-4xl font-bold text-center">Get Started in 3 Steps</h1>
            <p className="text-md font-light text-center">Start using premium digital tools in minutes.
            </p>
            </div>
           <div className="grid grid-cols-3 gap-6 my-15">

            <div className="card bg-base-100 h-96  border border-gray-200">
            <div className="bg-linear-to-bl from-[#4F39F6] to-[#9514FA] p-3 rounded-full flex justify-end text-white font-bold max-w-fit max-h-fit self-end mr-3 mt-3">01</div>
  <figure className="p-4 rounded-full max-w-fit mx-auto bg-purple-100">
    <img
      src={icon1}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-2xl font-bold">Create Account </h2>
    <p>Browse our catalog and select the tools <br />that fit your needs.</p>
  </div>
        </div>
          <div className="card bg-base-100 h-96  border border-gray-200">
            <div className="bg-linear-to-bl from-[#4F39F6] to-[#9514FA] p-3 rounded-full flex justify-end text-white font-bold max-w-fit max-h-fit self-end mr-3 mt-3">02</div>
  <figure className="p-4 rounded-full max-w-fit mx-auto bg-purple-100">
    <img
      src={icon2}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-2xl font-bold">Choose Product</h2>
    <p>Browse our catalog and select the tools <br />that fit your needs.</p>
  </div>
        </div>
          <div className="card bg-base-100 h-96  border border-gray-200">
            <div className="bg-linear-to-bl from-[#4F39F6] to-[#9514FA] p-3 rounded-full flex justify-end text-white font-bold max-w-fit max-h-fit self-end mr-3 mt-3">03</div>
  <figure className="p-4 rounded-full max-w-fit mx-auto bg-purple-100">
    <img
      src={icon3}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-2xl font-bold">Start Creating</h2>
    <p>Browse our catalog and select the tools <br />that fit your needs.</p>
  </div>
        </div>
           </div>
        </div>
    )
}

export default stepSection;