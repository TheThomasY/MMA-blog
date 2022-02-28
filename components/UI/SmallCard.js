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
      <div className='py-3'>
        <h2 className='mb-2 font-bold tracking-tight text-gray-900'>
          Fighter 1 vs Fighter 2 Lorem, ipsum dolor.
        </h2>
        <p className='text-xs'>1 hour ago</p>
      </div>
    </div>
  );
}
