import React from 'react';

// * Next
import Image from 'next/image';

export default function SmallCard(props) {
  return (
    <div className='flex flex-col w-full'>
      <div className='relative w-full'>
        <img
          src={props.img}
          alt=''
          className='object-cover object-top w-full h-24 rounded-lg md:h-32 lg:h-44'
        />
      </div>
      <div className=''>
        <h2 className='mt-2 font-bold'>
          Fighter 1 vs Fighter 2 Lorem, ipsum dolor.
        </h2>
        <p className='mt-4 text-xs text-gray-500'>1 hour ago</p>
      </div>
    </div>
  );
}
