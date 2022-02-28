import React from 'react';

export default function Navbar() {
  return (
    <nav>
      <ul className='flex w-4/5 mx-auto'>
        <li>
          <a href=''>MMA News</a>
        </li>
        <li>
          <a href=''>Home</a>
        </li>
        <li>
          <a href=''>Results</a>
        </li>
        <li className='ml-auto'>
          <a href=''>Search</a>
        </li>
      </ul>
    </nav>
  );
}
