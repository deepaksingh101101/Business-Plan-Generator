import { HiMiniLanguage } from "react-icons/hi2";
import { Link } from "react-router-dom";
import stars from "../../assets/images/star.svg";

import bg1 from "../../assets/images/bg1.webp";
import bg2 from "../../assets/images/bg2.webp";
import "./Home.css";
import ServiceCard from "../../components/serviceCard/ServiceCard";
import RatingCard from "../../components/rartingCard/RatingCard";
import WorkCard from "../../components/worksCard/WorkCard";
import KeyBenifits from "../../components/keyBenifits/KeyBenifits";
import Review from "../../components/customerReview/Review";

import Companies from "../../components/companies/Companies";
import LanguageSupport from "../../components/language/LanguageSupport";
export default function Home() {
  return (
    <div className="w-full z-[4] flex flex-col justify-center relative ">
      <div className="languageSelector  flex  mt-10 justify-center items-center ">
        <HiMiniLanguage className="h-[23px] text-[#51677B] me-2 w-[23px]" />
        <Link className="underline text-[#51677B]">change language</Link>
      </div>

      <div className="flex justify-center relative">
        <h1 className=" text-[38px] lg:text-[68px] leading-[50px] lg:leading-[80px]  font-medium text-center mt-[28px] max-w-[1060px] w-full">
          World's Best AI Business Plan Generator
        </h1>
        <img className="absolute blueBg z-[-1]" src={bg2} alt="bg1" />
        <img className="absolute redBg   z-[-1]" src={bg1} alt="bg1" />
      </div>
      <h5 className="text-center mt-5 text-xl mb-7  text-[#51677B] px-10">
        Fill out simple forms, select language, and get a business plan in under
        15 minutes. Try It Out!
      </h5>

      <div className="flex justify-center px-9">
        <button
          style={{ fontSize: "18px" }}
          className="continueBtnShadow  bg-black text-white px-[32px] py-[15px]   w-[370px] sm:w-[390px] md:w-[390px] lg:w-[390px] font-semibold rounded-xl hover:bg-[#2cc1ff]"
        >
          Make Your Business Plan
        </button>
      </div>

      <div className="flex justify-center w-ful">
        <div className="flex flex-row items-center justify-center my-8" style={{width:'50%'}} >
          <div className="w-full border-b border-gray-300"></div>
          <div className="text-gray-600 px-4">or</div>
          <div className="w-full border-b border-gray-300"></div>
        </div>
      </div>

      <div className="flex justify-center px-9">
        <button
          style={{ fontSize: "18px", border: "1px solid black" }}
          className=" loginIf bg-transparent  text-black border-black	 px-[32px] py-[10px]  sm::py-[15px] md:py-[15px] lg:py-[15px]   w-[370px] sm:w-[390px] md:w-[390px] lg:w-[390px] font-semibold rounded-xl"
        >
          Login if you've already made a plan
        </button>
      </div>

      {/* <img  className="absolute top-0 z-[-1]  " src={bg1} alt="bg1"  /> */}

      <div className="flex flex-col bg-[#F4FAFF] ">
        <div className="flex mt-16 lg:mt-48 ">
          <h1 className=" text-[32px] lg:text-[54px] font-medium px-7 lg:px-28 ">
            Who is this for?
          </h1>
        </div>

        <div className="my-6 flex justify-center">
          <ServiceCard />
        </div>
        <div className="customer_reviews">
          <Review />
        </div>
        <div className="my-6 lg:px-24 flex justify-center w-full">
          <div className="flex my-3 justify-center max-w-[1200px]">
            <RatingCard />
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 text-black mt-3">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-2">
            <div className="flex flex-row items-center gap-2 mr-4">
              <span className="text-lg">Reviews Form</span>
              <div className="flex items-center -mt-2">
                <img
                  style={{ width: "120px", height: "30px" }}
                  src="https://plannit.ai/assets/trustpilot.svg"
                  alt=""
                />
              </div>
            </div>
            <img
              src={stars}
              style={{ width: "160px", height: "24px" }}
              alt=""
            />
            <div className="text-lg text-center sm:text-left sm:ml-4">
              TrustScore <strong>4.7</strong> | <strong>74</strong> Reviews
            </div>
          </div>
          <span className="text-xl mt-2">Excellent</span>
        </div>

        <div className="companies_mentioned my-16">
          <Companies />
        </div>
        <div className="language_support my-16">
          <LanguageSupport />
        </div>

        <div className="flex flex-col mt-9  lg:px-28 ">
          <h1 className="text-start text-[32px] lg:text-[54px] font-medium mb-6 mt-5  px-6 lg:px-12">
            How it works?
          </h1>
          <p className="text-xl text-slate-400 lg:pe-[170px]  px-6 lg:px-12  ">
            Our AI business plan generator guides you through a few questions,
            once done a business plan example will be generated
          </p>
          <div className="flex justify-center">
            <WorkCard />
          </div>
        </div>

        <div className="flex flex-col  lg:px-24 ">
          <h1 className="text-start mb-16 text-[32px] lg:text-[54px] font-medium    px-6 lg:px-12 ">
            Key Benefits
          </h1>
          <div className=" flex justify-center ">
            <KeyBenifits />
          </div>
        </div>
      </div>
    </div>
  );
}
