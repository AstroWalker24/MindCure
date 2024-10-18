import React from 'react';
import '../index.css';
import {Link} from 'react-router-dom';

export default function Home() {

    // define the background gradients here and the body props here
    document.body.style.backgroundImage="url(../../public/assets/blackish-brown-gradient.png";
    document.body.style.backgroundSize="cover";
    document.body.style.backgroundAttachment="fixed";

    


  return (
        <div className='h-full sm:pt-6 sm:pl-4 pt-4 pl-4 '>
            
            {/* navbar goes here  */}
            <div className='w-full container mx-auto'>
                <div className='w-full flex items-center justify-between'>
                    <a className="flex items-center text-white no-underline hover:no-underline font-primary text-2xl lg:text-4xl " href="#">Mind<span className='text-amber-600'>Cure</span>
                    </a>

                    <div className='flex w-1/2 justify-end pr-4  content-center'>
                        <a className='inline-block rounded-sm font-primary bg-amber-600 text-white no-underline hover:text-black hover:text-underline text-center h-10 md:h-auto p-2 transform hover:scale-110  duration-300 ease-in-out' href="">
                            Account 
                        </a>

                        <a className='inline-block ml-4 rounded-sm font-primary bg-amber-600 text-white no-underline hover:text-black hover:text-underline text-center h-10 md:h-auto p-2 transform hover:scale-110  duration-300 ease-in-out' href="#">
                            Contact? 
                        </a>

                    </div>
                </div>
            </div>
            {/* navbar ends here  */}

            {/* main section starts here  */}
            <div className='container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center'>

                {/* left portion starts here */}
                <div className='flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden'>
                    <h1 className='my-4 text-3xl md:text-5xl text-white opacity-75 text-center md:text-left font-primary leading-relaxed'>
                        Mind<span className='text-amber-600'>Cure</span>: AI Backed Mental Health Solutions
                    </h1>

                    <p className='leading-normal font-primary text-white md:text-xl mb-8 text-center md:text-left'>
                    MindCure is an AI-powered platform designed to promote mental well-being. It helps individuals assess their stress levels and offers personalized support through advanced AI models. 
                    </p>

                    <form id='my-form' className='bg-white bg-opacity-10 backdrop-blur-md border rounded-lg border-gray-200 border-opacity-30 w-full shadow-lg px-8 pt-6 pb-8 mb-4' action="">
                        <div className='mb-4'>
                            <label className='block text-white py-2 font-primary mb-2'>Get Chats right into your inbox</label>
                            <input className='shadow appearance-none border rounded w-full p-3 text-black leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out font-primary' placeholder='your@somewhere.com'/>
                        </div>

                        <div className='flex items-center justify-between pt-4 '>
                            <button className='text-white font-primary bg-amber-600 py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out' type='button'>
                                <Link to="/chat">Start Conversation</Link>
                            </button>
                        </div>
                        
                    </form>
                </div>

                

            </div>


        </div>
  ) 
}
