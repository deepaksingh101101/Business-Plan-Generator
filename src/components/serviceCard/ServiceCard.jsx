import dolor from '../../assets/images/attach_money.svg'
import bank from '../../assets/images/account_balance.svg'
import person from '../../assets/images/person.svg'

export default function ServiceCard() {
  return (
    <div className="bg-[#EDF6FC] p-10 max-w-[411px]">
        <img src={dolor} className='bg-white rounded-[24px] p-5' alt='Dolor' />
        <h5 className='text-[20px] font-medium  py-6' >Entrepreneurs looking for investor funding</h5>
        <p className='text-[20px]' >Our AI business plan generator helps entrepreneurs in creating professional business plans designed to impress potential investors and secure funding</p>
    </div>
  )
}
