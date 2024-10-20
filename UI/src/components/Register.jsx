import React from 'react';
import '../index.css';
import {useEffect} from 'react';

export default function ({toggleForm}) {

    // document.body.style.background = "linear-gradient(135deg, #1a1a1d, #4a242d, #1a1a1d)";
    useEffect(() => {
        const loginLink = document.getElementById('goto-login');
    
        if (loginLink) {
          loginLink.addEventListener('click', toggleForm);
        }
    
        // Cleanup event listener when component unmounts
        return () => {
          if (loginLink) {
            loginLink.removeEventListener('click', toggleForm);
          }
        };
      }, []);

    return (
        <>
            <div className='my-container w-full mx-auto flex items-center h-screen'>
                <div className='w-full max-w-4xl max-md:max-w-xl mx-auto'>
                    <div className='grid md:grid-cols-1 gap-16 w-auto sm:p-8 p-6 shadow-md rounded-md overflow-hidden bg-white bg-opacity-10 backdrop-blur-md border border-gray-200 border-opacity-30'>
                        

                        <form action="#" className='w-full'>
                            <div className="mb-8">
                                <h3 className="text-white text-2xl font-primary">Register</h3>
                            </div>

                            <div className='space-y-6'>
                                <div>
                                    <label className="text-white text-md mb-2 block font-primary">Name</label>
                                    <div className="relative flex items-center">
                                        <input name="name" type="text" required className="bg-white border border-gray-300 w-full text-sm text-gray-800 pl-4 pr-10 py-2.5 rounded-md outline-blue-500" placeholder="Enter name" />
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                                            <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                                            <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-white text-md mb-2 block font-primary">Email Id</label>
                                    <div className="relative flex items-center">
                                        <input name="email" type="email" required className="bg-white border border-gray-300 w-full text-sm text-gray-800 pl-4 pr-10 py-2.5 rounded-md outline-blue-500" placeholder="Enter email" />
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4" viewBox="0 0 682.667 682.667">
                                            <defs>
                                                <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                                    <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                                                </clipPath>
                                            </defs>
                                            <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                                                <path fill="none" strokeMiterlimit="10" strokeWidth="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
                                                <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path>
                                            </g>
                                        </svg>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-white text-md font-primary mb-2 block">Password</label>
                                    <div className="relative flex items-center">
                                        <input name="password" type="password" required className="bg-white border border-gray-300 w-full text-sm text-gray-800 pl-4 pr-10 py-2.5 rounded-md outline-blue-500" placeholder="Enter password" />
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                                            <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                                        </svg>
                                    </div>
                                </div>

                                <div className='flex items-center'>
                                    <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-md" />
                                    <label htmlFor="remember-me" className="text-white ml-3 block text-md font-primary">
                                        I accept the <a href="javascript:void(0);" className="text-gray-400 font-primary text-md hover:underline ml-1">Terms and Conditions</a>
                                    </label>
                                </div>
                            </div>

                            <div className='!mt-8'>
                                <button type="button" className="w-full py-2.5 px-4 text-md tracking-wider font-primary rounded-md bg-white hover:bg-black text-black hover:text-white focus:outline-none">
                                    Create Account
                                </button>
                            </div>

                            <p className="text-white text-md mt-6 text-center font-primary">Already have an account? <a href="" className="text-gray-400 font-primary hover:underline ml-1" id='goto-login'>Login here</a></p>

                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}
