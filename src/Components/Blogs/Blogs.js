import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <div>
                <h1 class='font-bold mt-10'>What is the purpose of context Api?</h1>

                <p>The React Context API is a way for a React app to effectively produce global variables that pass data to specific components through the component tree without having to pass props down manually at every level.Basically, in React application, data is passed top-down via props. But such usage can be cumbersome for certain types of props.Basically, in React application, data is passed top-down via props. But such usage can be cumbersome for certain types of props. This is why React Context API comes and solves this problem.</p>
            </div>

            <div>
                <h1 class='font-bold mt-10'>What is the difference between inline, block and inline-block element?</h1>
                <p>
                    <span>Inline element: </span>
                    An inline element does not start on a new line.An inline element only takes up as much width as necessary.Any height and width properties will have no effect. <br /> <br />

                    <span>Block element: </span> A block-level element always starts on a new line. 
                    A block-level element always takes up the full width available. 
                    Can set width and height values. <br/> <br/> <br/>
                    <span>Inline-block element: </span> An inline-block element is formatted just like the inline element, where it does not start on a new line. But you Can set width and height values.
                </p>

            </div>
        </div>

        
    );
};

export default Blogs;