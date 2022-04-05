import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <div className='mt-10'>
            <ul className='md:flex justify-center items-center gap-8 text-xl'>
                <CustomLink to={'/home'} className='border-b-2'>HOME</CustomLink>
                <CustomLink to={'/reviews'} className='border-b-2'>REVIEWS</CustomLink>
                <CustomLink to={'/dashboard'} className='border-b-2'>DASHBOARD</CustomLink>
                <CustomLink to={'/blogs'} className='border-b-2'>BLOGS</CustomLink>
                <CustomLink to={'/about'} className='border-b-2'>ABOUT</CustomLink>
                
            </ul>
            
        </div>
    );
};

export default Header;