import React from 'react';
import {motion} from 'framer-motion';
import '../index.css';
import {useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function Hero() {


    const animator=()=>{
        let heading=document.querySelector(".heading");
        heading.addEventListener('mouseenter',()=>{
            heading.style.transform='scale(1.1)';
            heading.style.color="brown"
            heading.style.transition='transform 0.3s ease-in-out';
        });

        heading.addEventListener('mouseleave',()=>{
            heading.style.transform='scale(1)';
            heading.style.color="white"
            heading.style.transition='transform 0.3s ease-in-out'
        })

        let button=document.querySelector(".button");
        button.addEventListener('mouseenter',()=>{
            button.style.color="white";
            button.style.backgroundColor="brown";
            button.style.transition='transform 0.3s ease-in-out';
        });

        button.addEventListener('mouseleave',()=>{
            button.style.color="black";
            button.style.backgroundColor="white";
            button.style.transition='transform 0.3s ease-in-out';
        })
        button.addEventListener('click',()=>{
            button.style.color="white";
            button.style.backgroundColor="brown";
        })
    }

    useEffect(animator,[]);
    return (
        <div className='bg-[url("../../public/assets/biscuit-raises.jpg")] h-screen bg-no-repeat bg-cover w-full mx-auto flex flex-col items-center'>

            <motion.h1 className='heading font-primary text-white sm:text-8xl text-3xl  mt-10' initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:1,ease:"easeOut"}}>
                MindCare
            </motion.h1>

            <motion.p className='font-primary text-white text-md sm:text-xl sm:mt-6 mt-4 ml-6 mr-2' initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:1,delay:0.4,ease:"easeOut"}}> 
            AI-Backed Mental Health Solutions for Stress Detection and Personalized Counseling.
            </motion.p>

            

            <motion.button className='button text-black bg-white mt-6 sm:mt-6 sm:p-4 p-2 font-primary border rounded-lg' initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:1,delay:0.6,ease:"easeOut"}}>
                <Link to="/auth">Get Started</Link>
            </motion.button>
        </div>
    )
}
