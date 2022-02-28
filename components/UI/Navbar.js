import React from 'react';

// * React Icons
import { AiOutlineMenu } from 'react-icons/ai';

export default function Navbar() {
  return (
    <nav className='pt-8'>
      <ul className='flex items-center w-4/5 mx-auto'>
        <li>
          <a href=''>MMA News</a>
        </li>
        <li className='hidden ml-auto mr-12 md:block'>
          <a href=''>Home</a>
        </li>
        <li className='hidden mr-12 md:block'>
          <a href=''>Results</a>
        </li>
        <li className='hidden md:block'>
          <a href=''>Search</a>
        </li>
        <li className='ml-auto cursor-pointer md:hidden'>
          <AiOutlineMenu size={'18px'} />
        </li>
      </ul>
    </nav>
  );
}
