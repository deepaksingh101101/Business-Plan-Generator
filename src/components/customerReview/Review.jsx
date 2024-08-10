import chat1 from '../../assets/images/chat1.webp';
import chat2 from '../../assets/images/chat2.webp';
import chat3 from '../../assets/images/chat3.webp';
import chat4 from '../../assets/images/chat4.webp';
import chat5 from '../../assets/images/chat5.webp';
import chat6 from '../../assets/images/chat6.webp';

const Review = () => {
  return (
    <div className="container mx-auto px-4 max-w-[1200px]">
      <h1 className="text-start text-5xl font-medium mb-6">What customers say about us</h1>
      <p className='text-xl text-slate-400'>Our ultimate goal is to make a product that you love, to do that we need feedback. So we try to talk to as many customers as we can</p>
      <div className="flex justify-center items-center py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col p-8 rounded-3xl bg-[rgba(230,241,250,0.5)] transition-shadow duration-300 ease-in-out shadow-lg hover:shadow-xl">
            <p className="text-lg md:text-2xl font-medium pb-4"><strong>Zede H.</strong></p>
            <div className="flex flex-col justify-center items-center space-y-4">
              <img 
                alt="Review chat 1" 
                src={chat1} 
                className="w-full h-auto max-w-xs mx-auto" 
                decoding="async" 
                loading="lazy" 
                style={{ color: 'transparent' }} 
              />
              <img 
                alt="Review chat 2" 
                src={chat2} 
                className="w-full h-auto max-w-xs mx-auto" 
                decoding="async" 
                loading="lazy" 
                style={{ color: 'transparent' }} 
              />
            </div>
          </div>

          <div className="flex flex-col p-8 rounded-3xl bg-[rgba(230,241,250,0.5)] transition-shadow duration-300 ease-in-out shadow-lg hover:shadow-xl">
            <p className="text-lg md:text-2xl font-medium pb-4"><strong>Jason C.</strong></p>
            <img 
              alt="Review chat 3" 
              src={chat3} 
              className="w-full h-auto max-w-xs mx-auto" 
              decoding="async" 
              loading="lazy" 
              style={{ color: 'transparent' }} 
            />
            <br/>
            <img 
              alt="Review chat 4" 
              src={chat4} 
              className="w-full h-auto max-w-xs mx-auto" 
              decoding="async" 
              loading="lazy" 
              style={{ color: 'transparent' }} 
            />
          </div>

          <div className="flex flex-col p-8 rounded-3xl bg-[rgba(230,241,250,0.5)] transition-shadow duration-300 ease-in-out shadow-lg hover:shadow-xl">
            <p className="text-lg md:text-2xl font-medium pb-4"><strong>Parker A.</strong></p>
            <img 
              alt="Review chat 5" 
              src={chat5} 
              className="w-full h-auto max-w-xs mx-auto" 
              decoding="async" 
              loading="lazy" 
              style={{ color: 'transparent' }} 
            />
            <br/>
            <img 
              alt="Review chat 6" 
              src={chat6} 
              className="w-full h-auto max-w-xs mx-auto" 
              decoding="async" 
              loading="lazy" 
              style={{ color: 'transparent' }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
