import React from 'react';

// * Next
import Image from 'next/image';

// * Components
import SmallCard from '../../UI/SmallCard';

export default function Latest() {
  return (
    <section className='mt-14'>
      <h2 className='text-2xl font-bold'>Latest News</h2>
      <div className='grid grid-cols-2 mt-4 md:grid-cols-3 lg:grid-cols-4 gap-x-5 lg:gap-x-8 gap-y-8 lg:gap-y-16'>
        <SmallCard img={'/jorge.webp'} />
        <SmallCard img={'/edson.jpg'} />
        <SmallCard img={'/rda.webp'} />
        <SmallCard img={'/holland.jpg'} />
      </div>
    </section>
  );
}
