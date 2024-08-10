
import { HiMiniLanguage } from "react-icons/hi2";
import { Link } from "react-router-dom";
import bg1 from '../../assets/images/bg1.webp'
import bg2 from '../../assets/images/bg2.webp'
import './Home.css'
import ServiceCard from "../../components/serviceCard/ServiceCard";
export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center relative bg-[#F4FAFF]" >

<div className="languageSelector flex  mt-10 justify-center items-center ">
<HiMiniLanguage   className="h-[23px] text-[#51677B] me-2 w-[23px]" />
<Link className="underline text-[#51677B]" >change language</Link>
</div>


<div className="flex justify-center relative">
<h1  className=" text-[38px] lg:text-[68px] leading-[50px] lg:leading-[80px]  font-medium text-center mt-[28px] max-w-[1060px] w-full"   >World's Best AI Business Plan Generator</h1>
<img className="absolute blueBg z-[-1]" src={bg2} alt="bg1" />
<img className="absolute redBg   z-[-1]" src={bg1} alt="bg1" />
</div>
<h5 className="text-center mt-5 text-xl mb-7  text-[#51677B] px-10" >Fill out simple forms, select language, and get a business plan in under 15 minutes. Try It Out!</h5>

<div className="flex justify-center px-9">
<button style={{fontSize:"18px"}} className='continueBtnShadow  bg-black text-white px-[32px] py-[15px]   w-[370px] sm:w-[390px] md:w-[390px] lg:w-[390px] font-semibold rounded-xl hover:bg-[#2cc1ff]'>
          Make Your Business Plan
        </button>
</div>


<div className="flex flex-col justify-center w-full">
<div className="flex items-center justify-between my-8 max-w-[390px] px-[34px]">
  <div className="w-1/2 border-b border-gray-300"></div>
  <div className="text-gray-600 px-4">or</div>
  <div className="w-1/2 border-b border-gray-300"></div>
  </div>
</div>

<div className="flex justify-center px-9">
<button style={{fontSize:"18px",border:"1px solid black"}} className=' loginIf bg-transparent  text-black border-black	 px-[32px] py-[10px]  sm::py-[15px] md:py-[15px] lg:py-[15px]   w-[370px] sm:w-[390px] md:w-[390px] lg:w-[390px] font-semibold rounded-xl'>
          Login if you've already made a plan
        </button>
</div>

{/* <img  className="absolute top-0 z-[-1]  " src={bg1} alt="bg1"  /> */}

<div className="flex my-48 ">
  <h1 className="text-[54px] font-medium px-40" >Who is this for?</h1>
</div>

<div className="px-40 my-40">
  <ServiceCard/>
</div>
    </div>
  )
}
