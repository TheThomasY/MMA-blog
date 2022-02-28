import React from 'react';

// * Next
import Image from 'next/image';

// * Files

export default function Featured() {
  return (
    <section className='mt-14'>
      <h1 className='text-5xl font-semibold'>Featured</h1>
      <div className='flex gap-5 mt-6'>
        <div className='relative h-[200px] sm:h-[355px] lg:h-[400px] w-[870px]'>
          <Image
            src='/covington.jpg'
            alt='Poster for UFC 272 Covington vs Masvidal'
            layout='fill'
            objectFit='cover'
            className='rounded-lg'
          />
        </div>
        <p className='hidden w-72 lg:block'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum non,
          enim saepe quaerat suscipit odio quasi maxime ipsam nesciunt dolore
          illum sequi quos ipsa possimus incidunt eveniet ullam consectetur
          consequuntur distinctio sit, ut omnis aut. Dolore voluptates possimus
          iure facilis?
        </p>
      </div>
    </section>
  );
}
