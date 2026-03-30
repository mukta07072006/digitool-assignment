import { CiPlay1 } from "react-icons/ci";
import banner from '../assets/banner.png'


const hero = () => {
    return (
        <div className="px-30 py-10 font">
  <div className="flex justify-between items-center">
    <div className="max-w-xl">
      <div className="bg-[#E1E7FF] rounded-full text-[#4F39F6] btn">
        <span className="loading loading-ring loading-xs"></span>
        New Ai Powered Tools Available
      </div>
      <h1 className="text-6xl font-bold mt-6">
        Supercharge Your <br />Digital Workflow
      </h1>
      <p className="mt-5 text-xl font-light">
        Access premium AI tools, design assets, templates, and productivity <br />
        software—all in one place. Start creating faster today. <br />
        Explore Products
      </p>
      <div className="mt-5 flex gap-4">
        <button className="bg-linear-to-bl from-[#4F39F6] to-[#9514FA] btn text-white font-semibold rounded-full">
          Explore Products
        </button>
        <button className="btn border border-purple-600 text-purple-600 font-semibold rounded-full bg-white">
          <CiPlay1 /> Getting Started
        </button>
      </div>
    </div>
    <div>
      <img src={banner} alt="banner" />
    </div>
  </div>
</div>
        

    );
};

export default hero;