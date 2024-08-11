
import language from '../../assets/images/language.svg'
import bolt from '../../assets/images/bolt.svg'
import left from '../../assets/images/left.webp'
import right from '../../assets/images/right.webp'
export default function KeyBenifits() {
  return (
    <>
  <div className="flex justify-center max-w-[1200px] flex-wrap lg:flex-nowrap">
  <div className='mx-3 lg:flex-1 shadow-on-hover-red lg:me-7 flex items-center flex-col max-w-[585px] bg-[#FBFDFF] px-6 lg:px-[50px] pt-[60px] pb-[96px] ' >

<div className="flex items-center ">
    <img style={{height:"33px", width:"33px",opacity:"0.7"}} src={language} alt='Globe' />
    <h5 className=' ms-5 text-[#717477] font-medium  text-[20px] md:text-[26px] lg:text-[26px] leading-[120%] '  >Our AI draws business knowledge from the entire internet</h5>
</div>
    <p className='my-5 lg:my-8 text-[17px] leading-[178%] text-[#788999]'   >GPT-3.5 and GPT-4 are our cutting-edge language models, trained on vast quantities of internet, book-based resources, business plan examples, and has demonstrated its knowledge by <b className='text-black' > passing the Wharton MBA exam</b> among many others</p>

<img src={left} alt='Left' />
    </div>

    <div className="mx-3 lg:flex-1 mt-12 lg:mt-[-50px]">
    <div className=' shadow-on-hover-blue lg:me-7 flex items-center flex-col max-w-[585px] bg-[#FBFDFF] px-6 lg:px-[50px] pt-[60px] pb-[96px] ' >

<div className="flex items-center ">
    <img style={{height:"33px", width:"33px",opacity:"0.7"}} src={bolt} alt='Globe' />
    <h5 className=' ms-5 text-[#717477] font-medium text-[20px] md:text-[26px] lg:text-[26px] leading-[120%] '  >The whole process can literally take 15 minutes</h5>
</div>
    <p className='my-5 lg:my-8 text-[17px] leading-[178%] text-[#788999]'   >Gone are the days of laboring over business plans for weeks on end, our AI business plan generator can create a comprehensive plan in just 15 minutes.</p>

<img src={right} alt='Left' />
    </div>
    </div>
  </div>

    </>
  )
}
