import React from 'react';
import useComment from '../../CustomHooks/useComment';
import Comment from '../Comment/Comment';

const Reviews = () => {
    const [comments, setComments] = useComment();
    return (
        <div>
            <h1>Review All</h1>
            <div>
                {
                    Comment.map(comment => <Comment comments={comment} key={comment.id}></Comment>)
                }
            </div>
        </div>
    );
};

export default Reviews;