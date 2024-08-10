import logo from '../../assets/images/bpglogo.webp'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="bg-[#F4FAFF]">
      <div className='flex justify-between lg:px-[30px] md:px-[30px] sm:px-[25px] px-[9px] py-5'>
        <img 
          src={logo} 
          className=' logo w-[270px] h-[39.24px] xs:w-[126px] xs:h-[30px]' 
          alt='Logo' 
        />
        <button className='continueBtnShadow bg-black text-white px-[26px] py-[9px] font-semibold rounded-xl hover:bg-[#2cc1ff]'>
          Continue
        </button>
      </div>
    </div>
  )
}
