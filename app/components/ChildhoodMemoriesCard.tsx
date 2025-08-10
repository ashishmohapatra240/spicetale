import React from 'react';
import Image from 'next/image';

const ChildhoodMemoriesCard: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-white">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-8">
        {/* Text Section */}
        <div className="flex-1 space-y-4">
          <p className="font-sans text-[#3F2424] text-lg text-center md:text-left lg:text-xl leading-relaxed font-medium">
            We have been continuously trying to create value, sharing memories, with flavours which are very unique and relatable with our childhood.
          </p>
        </div>
        
        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 shadow-lg ">
            <Image
              src="/about-us/image 11.png" // Replace with your actual image path
              alt="Childhood memories illustration showing three friends at a local store"
              width={582}
              height={388}
              className="rounded-xl object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildhoodMemoriesCard;