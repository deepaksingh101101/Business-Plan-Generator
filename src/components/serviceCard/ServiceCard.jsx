
import dolor from '../../assets/images/attach_money.svg';
import bank from '../../assets/images/account_balance.svg';
import person from '../../assets/images/person.svg';
import './ServiceCard.css';

const serviceData = [
  {
    image: dolor,
    alt: 'Dolor',
    title: 'Entrepreneurs looking for investor funding',
    description: 'Our AI business plan generator helps entrepreneurs in creating professional business plans designed to impress potential investors and secure funding',
  },
  {
    image: bank,
    alt: 'Bank',
    title: 'Business owners and entrepreneurs looking for a bank loan',
    description: "Our AI business plan generator is SBA-approved and follows to most banks' business plan template.",
  },
  {
    image: person,
    alt: 'Person',
    title: 'For anyone looking to make a business plan',
    description: "Whether you want an AI generated business plan for self-learning, as a reference for a project, or for submission to a non-financial institution, we've got you covered.",
  }
];

export default function ServiceCard() {
  return (
    <div className="service-card-container flex   md:justify-start lg:justify-center flex-wrap">
      {serviceData.map((service, index) => (
        <div key={index} className="bg-[#EDF6FC]   py-10 px-4 md:p-7 lg:px-8 lg:py-10 lg:max-w-[411px] rounded-[24px] shadow-on-hover m-4 lg:m-4">
          <img src={service.image} className="bg-white rounded-[24px] p-5" alt={service.alt} />
          <h5 className="text-[20px]  sm::text-[20px] md::text-[20px]  lg:text-[20px] font-[500] lg:pe-10 py-6">{service.title}</h5>
          <p className="text-[18px] text-[#50667A]">{service.description}</p>
        </div>
      ))}
    </div>
  );
}
