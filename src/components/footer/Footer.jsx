import './Footer.css'
import bg1 from '../../assets/images/bg1.webp'
import bg2 from '../../assets/images/bg2.webp'
import logo from '../../assets/images/bpglogo.webp'
export default function Footer() {
  return (
    <>
      <div className=" bg-[#F4FAFF]  w-full flex flex-col justify-center relative " >




        <div className="flex justify-center relative">
          <h1 className=" z-[3] text-[30px] lg:text-[60px] leading-[40px] lg:leading-[80px] px-10  font-medium text-center lg:mt-[28px] max-w-[1060px] w-full"   >Our AI generated business plan template won't let you down</h1>

        </div>
        <div className="flex justify-center">
          <h5 className="z-[3] text-center mt-8 text-xl mb-7  text-[#51677B] px-10  max-w-[600px]" >create a professional business plan in just 15 minutes with our AI business plan generator</h5>
        </div>

        <div className="flex justify-center px-9 mt-3">
          <button className=' z-[3] fontCustom text-[18px] continueBtnShadow  bg-black text-white px-[32px] py-[15px]   w-[370px] sm:w-[390px] md:w-[390px] lg:w-[390px] font-semibold rounded-xl hover:bg-[#2cc1ff]'>
            Make Your Business Plan
          </button>
        </div>


        <div className="flex justify-center w-ful">
          <div className="flex flex-row items-center justify-center my-8" style={{ width: '50%' }} >
            <div className="w-full border-b border-gray-300"></div>
            <div className="text-gray-600 px-4">or</div>
            <div className="w-full border-b border-gray-300"></div>
          </div>
        </div>

        <div className="flex justify-center px-9 relative ">
          <button style={{ fontSize: "18px", border: "1px solid black" }} className='z-[3] fontCustom loginIf bg-transparent  text-black border-black	 px-[32px] py-[10px]  sm::py-[15px] md:py-[15px] lg:py-[15px]   w-[370px] sm:w-[390px] md:w-[390px] lg:w-[390px] font-semibold rounded-xl'>
            Login if you've already made a plan
          </button>
          <img className="absolute blueBgf z-[2]" src={bg2} alt="bg1" />
          <img className="absolute redBgf   z-[1]" src={bg1} alt="bg1" />
        </div>


        <div className="flex justify-center flex-col  mb-16 mt-20  sm:mt-20 md:mt-40 lg:mt-60">
          <div className="flex justify-center z-[3] ">
            <img
              src={logo}
              className=' logo w-[270px] h-[39.24px] xs:w-[126px] xs:h-[30px]'
              alt='Logo'
            />

          </div>
          <h5 className='z-[3] customf text-center  mt-7 lg:mt-8 font-semibold ' >Contact us at: help@15minuteplan.ai</h5>
          <h5 className='z-[3] text-center  mt-6 lg:mt-7 underline font-normal' >Refund Policy</h5>
          <h5 className='z-[3] text-center  mt-6 lg:mt-7 underline font-normal' >Privacy Policy</h5>
          <h5 className='z-[3] text-[#8A9BA9] text-center  mt-12 lg:mt-32 ' >©2023 15minuteplan.ai All rights reserved.</h5>
        </div>

      </div>
      <div className="z-[3] navbar-bg"></div>
    </>
  )
}
