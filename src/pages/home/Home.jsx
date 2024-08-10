
import { HiMiniLanguage } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full" >

<div className="languageSelector flex  mt-10 justify-center items-center ">
<HiMiniLanguage   className="h-[23px] text-[#51677B] me-2 w-[23px]" />
<Link className="underline text-[#51677B]" >change language</Link>
</div>


<div className="flex justify-center">
<h1 style={{lineHeight:"80px"}} className="text-[68px]  font-medium text-center mt-8 max-w-[1060px] w-full"   >World's Best AI Business Plan Generator</h1>

</div>
    </div>
  )
}
