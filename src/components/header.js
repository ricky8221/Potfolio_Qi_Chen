import React , { useState }from 'react';
import Navbar from './navbar';

export const header = () => {
  return (
    <div>
        <nav className='navbar'>
            <Navbar/>
        </nav>
    </div>


  )
}
export default header;
