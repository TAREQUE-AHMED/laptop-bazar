import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';


const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
            <Link style={{ color: match ? '#b45e00' : 'black', borderBottom: match ? '3px solid #b45e00' : '2px solid rgb(155 155 155 /40%)', fontSize: match ? '20px' : '18px', fontWeight: match ? 'bold' : '' }} to={to} {...props}>
                {children}
            
            </Link>
        </div>
    );
};

export default CustomLink;
