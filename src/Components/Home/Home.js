import React from 'react';
import useComment from '../../CustomHooks/useComment';
import Comment from '../Comment/Comment';
import laptop from '../../img/Beste-laptop.jpg';
import Reviews from '../Reviews/Reviews';
import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {
    const [comments, setComments] = useComment();

    return (
        <div>
            <div className='md:flex justify-center items-center md:ml-18 home'>
                <div className='laptop-baj flex flex-col items-start'>
                    <h1 className='text-4xl font-bold text-cyan-600'>Laptop Bazar</h1>
                    <p className='text-2xl text-justify'>Select Your Best Laptop On Your Prize. You Can Find Here ALL Type Of Laptop.</p>
                    <button>Demo Here</button>
                </div>
                <div className='laptop-img'>
                    <img src={laptop} alt=""/>

                </div>
            </div>
            <div className='client-comment'>
                <h1 className='text-4xl font-bold text-cyan-500'>Client Reviews(3)</h1>
                <div className='md:flex justify-center items-center gap-8 mt-8 mb-8'>
                    {
                        comments.map(comment =><Comment comments={comment} key={comment.id}></Comment>).slice(0,3)
                    }
                </div>
                <Link to={'/reviews'} element={<Reviews></Reviews>}>
                    <button class="bg-cyan-400 hover:bg-cyan-600 px-10 mt-5 py-2 mb-20 text-white text-2xl font-semibold rounded">See All Reviews</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;