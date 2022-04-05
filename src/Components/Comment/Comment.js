import React from 'react';
import './Comment.css'

const Comments = ({ comments }) => {
    const { name, comment, ratting, img } = comments;
    return (
        <div className='flex flex-col items-start shadow-lg p-4 shadow-gray-400 rounded-md client-comment'>
            <img className='mb-6' src={img} alt="" />
            <h1 className='text-2xl'>{name}</h1>
            <p className='comment'>Comment: {comment}</p>
            <p className='text-xl'>Ratting: {ratting}</p>
            
        </div>
    );
};

export default Comments;