import React from 'react';
import {useState} from 'react';
import {motion,AnimatePresence} from 'framer-motion';
import Register from './Register';
import Login from './Login';
import '../index.css';

export default function Auth() {
    
    const [showLogin,setShowLogin]=useState(true);

    const formVariants = {
        hidden: { opacity: 0, y: '100vh' }, 
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },  
        exit: { opacity: 0, y: '-100vh', transition: { duration: 1 } }  
      };
    

    const toggleForm=(event)=>{
        event.preventDefault();
        setShowLogin(!showLogin);
    }

    return (
        <div className="auth-container">
      <AnimatePresence mode="wait"> {/* Ensures exit finishes before new form enters */}
        {showLogin ? (
          <motion.div
            key="login"
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Login toggleForm={toggleForm} />
          </motion.div>
        ) : (
          <motion.div
            key="register"
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Register toggleForm={toggleForm} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
      );
}
