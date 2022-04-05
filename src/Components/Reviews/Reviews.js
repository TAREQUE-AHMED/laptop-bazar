import React from 'react';
import useComment from '../../CustomHooks/useComment';
import Comment from '../Comment/Comment';

const Reviews = () => {
    const [comments, setComments] = useComment();
    return (
        <div>
            <h1 className='mt-8 text-cyan-500 text-4xl'> All Review</h1>
            <div className='md:grid grid-cols-3 gap-10 mx-10 mt-10'>
                {
                    comments.map(comment => <Comment comments={comment} key={comment.id}></Comment>)
                }
            </div>
        </div>
    );
};

export default Reviews;