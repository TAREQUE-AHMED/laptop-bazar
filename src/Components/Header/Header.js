import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    const [gaping, setGaping] = useState(false);
    return (
        <nav className='mt-10'>
            <div onClick={() => setGaping(!gaping)} className='bg-slate-500 md:bg-white py-3'>
               
            </div>
            <ul className='md:flex justify-center items-center gap-8 text-xl'>
                <CustomLink to={'/home'} className='border-b-2'>HOME</CustomLink>
                <CustomLink to={'/reviews'} className='border-b-2'>REVIEWS</CustomLink>
                <CustomLink to={'/dashboard'} className='border-b-2'>DASHBOARD</CustomLink>
                <CustomLink to={'/blogs'} className='border-b-2'>BLOGS</CustomLink>
                <CustomLink to={'/about'} className='border-b-2'>ABOUT</CustomLink>
                
            </ul>
            
        </nav>
    );
};

export default Header;