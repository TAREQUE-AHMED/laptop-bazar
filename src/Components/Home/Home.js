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
            <div>
                <div>
                    <h1>Laptop Bazar</h1>
                    <p>Select Your Best Laptop On Your Prize. You Can Find Here ALl Type Of Laptop.</p>
                    <button>Demo Here</button>
                </div>
                <div className='laptop-img'>
                    <img src={laptop} alt=""/>

                </div>
            </div>
            <div className='client-comment'>
                <h1>Client Reviews</h1>
                <div>
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