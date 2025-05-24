import React from 'react';
import blogImage  from '../assets/1.webp'
import blog2 from '../assets/2.webp'
import { FaCommentAlt } from "react-icons/fa";

const LatestBlog = () => {
    return (
       <div className=' py-20'>
         <div className='w-11/12 mx-auto mt-12'>
            <h1 className='text-center font-bold text-3xl my-5'>Lates Blog</h1>
            {/* main div  */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-0'>
                <div className='relative'>
                    <img src={blogImage} alt="" />
                    <button className='btn p-8 text-3xl bg-[#798d7a] absolute top-5 border-none left-5'>20 <br />
                    Jun</button>
                </div>
                <div className='p-12 bg-[#e1ebe2]'>
                    <h2 className='text-xl text-[#212529] font-bold'>Creative Garden Layouts for Every Space</h2>
                    <br />
                    <p className='text-[#647566]'>This month has been bustling with exciting developments in the world of plants. From groundbreaking new devices to innovative...</p>
                    <p className='flex items-end gap-4 mt-40 text-[#647566]'> <span><FaCommentAlt /></span>  <span>10 Comments</span> </p>
                </div>
                <div className='relative'>
                    <img src={blog2} alt="" />
                    <button className='btn p-8 text-3xl bg-[#798d7a] absolute top-5 border-none left-5'>20 <br />
                    Jun</button>
                </div>
                <div className='p-12 bg-[#e1ebe2]'>
                    <h2 className='text-xl text-[#212529] font-bold'>Top Trends in Modern Garden Landscaping</h2>
                    <br />
                    <p className='text-[#647566]'>This month has been bustling with exciting developments in the world of plants. From groundbreaking new devices to innovative...</p>
                     <p className='flex items-end gap-4 mt-40 text-[#647566]'> <span><FaCommentAlt /></span>  <span>10 Comments</span> </p>
                </div>
            </div>
        </div>
       </div>
    );
};

export default LatestBlog;