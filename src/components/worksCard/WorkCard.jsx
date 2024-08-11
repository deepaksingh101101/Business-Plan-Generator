import React from 'react';
import work1 from '../../assets/images/edit.svg';
import work2 from '../../assets/images/fact_check.svg';

const workData = [
  {
    image: work2,
    alt: 'Work2',
    number: '1',
    title: 'Enter General Business Information',
    description: 'Only basic business information is required e.g. business name, number of employees, and a little financial data.',
  },
  {
    image: work1,
    alt: 'Work1',
    number: '2',
    title: 'Edit and Save',
    description: 'Once your AI plan is generated you can easily edit the plan with our "Talk To Plan" feature. You can input what you want changed and AI will take care of the rest.',
  },
];

export default function WorkCard() {
  return (
    <div className="outer flex justify-around  flex-wrap lg:flex-nowrap  mt-16 px-3 mb-40 max-w-[1200px]">
      {workData.map((work, index) => (
        <div key={index} className="flex flex-col bg-[#EDF6FC]  w-full lg:w-[550px] px-[20px] lg:px-[35px] py-[40px] sm:me-5 md:me-5 lg:me-5  shadow-on-hover rounded-[24px] mb-8">
          <div className="bg-white p-[20px] rounded-[24px] max-w-[80px] relative">
            <img src={work.image} style={{ height: '40px', width: '40px' }} alt={work.alt} />
            <span className="bg-black text-white font-semibold absolute top-[-6px] right-[-6px] px-[10px] rounded-[50%]">
              {work.number}
            </span>
          </div>
          <h5 className=" text-[17px]  sm::text-[20px] md::text-[20px]  lg:text-[20px] my-4 max-w-[250px] font-[500]">{work.title}</h5>
          <p className="text-[#50667A] text-[17px]  sm::text-[17px] md::text-[17px]  lg:text-[20px] max-w-[480px] leading-[30px]">{work.description}</p>
        </div>
      ))}
    </div>
  );
}
