import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import './Header.css';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='mt-10'>
            <div onClick={() => setOpen(!open)} className='bg-slate-500 md:bg-white py-3'>
                {
                    open ? <XIcon className='w-6 h-6 md:hidden'></XIcon> : <MenuIcon className='w-6 h-6 md:hidden'></MenuIcon>
               }
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