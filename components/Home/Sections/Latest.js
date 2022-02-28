import React from 'react';

// * Next
import Image from 'next/image';

// * Components
import SmallCard from '../../UI/SmallCard';

export default function Latest() {
  return (
    <section className='mt-14'>
      <h2 className='text-3xl font-semibold'>Latest News</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8'>
        <SmallCard img={'/jorge.webp'} />
        <SmallCard img={'/edson.jpg'} />
        <SmallCard img={'/rda.webp'} />
        <SmallCard img={'/holland.jpg'} />
        <SmallCard img={'/jorge.webp'} />
        <SmallCard img={'/edson.jpg'} />
        <SmallCard img={'/rda.webp'} />
        <SmallCard img={'/holland.jpg'} />
      </div>
    </section>
  );
}
