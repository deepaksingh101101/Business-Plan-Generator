
import stars from '../../assets/images/star.svg';
import Trist1 from '../../assets/images/TrustPic1.webp';
import Trist2 from '../../assets/images/TrustPic1.webp';
import Trist3 from '../../assets/images/TrustPic1.webp';

const ratingData = [
  {
    name: 'Harry M.',
    image: Trist1,
    title: 'I needed a business plan to apply for a…',
    description: 'I needed a business plan to apply for a bank loan, and 15MinutePlan made it so simple. The plan was SBA-approved, and the bank was impressed with its thoroughness. Fantastic service!',
  },
  {
    name: 'Sarah P.',
    image: Trist2,
    title: 'A plan in need is 15minute.ai indeed',
    description: 'I had to make an urgent business plan for my new company. I had already made one in the past and it was a lot of work spending several days and nights. A friend recommended 15minuteplan.ai and to be honest within a few hours I had the perfect plan, fully detailed, etc. I will certainly recommend it to others. Thanks a lot, guys. Much appreciated.',
  },
  {
    name: 'John D.',
    image: Trist3,
    title: 'Simple and easy to use, comprehensive and mind-reading!',
    description: 'Simple and easy to use, took so little time, and feels like the tool knows exactly what I want to include and review and consider, and then generates a product on a much higher level than I would have been able to do on my own without having a professional assist me, taking factors into consideration that I would not have considered.',
  },
];

export default function RatingCard() {
  return (
    <div className="mx-auto px-4 py-8 flex flex-col items-center justify-center gap-4">
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {ratingData.map((rating, index) => (
          <div key={index} className="flex flex-col bg-[#EDF6FC] shadow-on-hover py-5 px-4 rounded-lg">
            <div className="flex w-full justify-between items-center">
              <div className="flex justify-start py-0 flex-col">
                <h1 className='font-medium text-[20px]' >{rating.name}</h1>
                <img src={stars} alt="stars" className="py-[6px]" />
              </div>
              <img src={rating.image} style={{ height: "40px", width: "40px" }} alt={rating.name} />
            </div>
            <h5 className="underline text-lg mt-2">{rating.title}</h5>
            <p className="my-3 text-[14px]">{rating.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
