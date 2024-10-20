import React from 'react';
import '../index.css';
import {useEffect} from 'react';

export default function Login({toggleForm}) {
    // document.body.style.background = "linear-gradient(135deg, #1a1a1d, #4a242d, #1a1a1d)";
    useEffect(() => {
        const registerLink = document.getElementById('goto-register');
    
        if (registerLink) {
          registerLink.addEventListener('click', toggleForm);
        }
    
        // Cleanup event listener when component unmounts
        return () => {
          if (registerLink) {
            registerLink.removeEventListener('click', toggleForm);
          }
        };
      }, []);
    
      
    return (
        <div className='font-primary'>
            <div className='min-h-screen flex flex-col items-center justify-center py-6 px-4'>
                <div className='grid md:grid-cols-2 items-center gap-10 max-w-6xl w-full bg-white bg-opacity-10 backdrop-blur-md border rounded-lg border-gray-200 border-opacity-30 p-8'>
                    <div>
                        <h2 className="lg:text-5xl text-4xl font-primary lg:leading-[55px] text-white">
                            MindCare
                        </h2>
                        <p className="text-md mt-6 text-white">At <b>MindCare</b>, we blend cutting-edge AI with compassionate care to help individuals identify and manage mental stress.Our platform intelligently analyzes your mental well-being through a simple, non-invasive process. If stress is detected, we don't stop there—MindCare offers personalized counseling to guide you through your emotional challenges. </p>
                        <p className="text-md mt-12 text-white">Don't have an account ? <a href="" className="text-gray-400 font-primary hover:underline ml-1" id='goto-register'>Register here</a></p>
                    </div>

                    <form action="" className='max-w-md md:ml-auto w-full'>
                        <h3 className="text-white text-3xl font-primary mb-8">
                            Sign in
                        </h3>

                        <div className='space-y-4'>
                            <div>
                                <input name="email" type="email" autoComplete="email" required className="bg-gray-100 w-full text-md text-black px-4 py-3.5 rounded-md outline-blue-600 focus:bg-white" placeholder="Email address" />
                            </div>

                            <div>
                                <input name="password" type="password" autoComplete="current-password" required className="bg-gray-100 w-full text-md text-black px-4 py-3.5 rounded-md outline-blue-600 focus:bg-white" placeholder="Password" />
                            </div>

                            <div className='flex flex-wrap items-center justify-between gap-4'>
                                <div className='items-center flex'>
                                    <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                    <label htmlFor="remember-me" className="ml-3 block text-md text-white">
                                        Remember me
                                    </label>
                                </div>
                                <div className='text-md'>
                                    <a href="#" className="text-gray-400 hover:text-gray-600 font-primary">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="!mt-8">
                            <button type="button" className="w-full shadow-xl py-2.5 px-4 text-md font-primary rounded text-black bg-white hover:bg-amber-800 hover:text-white focus:outline-none">
                                Log in
                            </button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}
