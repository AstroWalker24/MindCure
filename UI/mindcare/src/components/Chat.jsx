import React from 'react';
import {useEffect} from 'react';

export default function Chat() {
  const changer =()=>{
    document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('chat-input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
  const inputField = document.getElementById('chat-input');
  const userMessage = inputField.value.trim();

  if (userMessage) {
    addMessage(userMessage, 'user');
    inputField.value = '';
    simulateBotReply(userMessage);
  }
}

function addMessage(message, sender) {
  const chatBox = document.getElementById('chat-box');
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender} mb-3`;

  messageDiv.innerHTML = `
    <p class="${sender === 'user' 
      ? 'bg-gray-300 text-black' 
      : 'bg-blue-500 text-white'} p-3 rounded-lg inline-block">
      ${message}
    </p>
  `;

  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight; // Scroll to latest message
}

function simulateBotReply(userMessage) {
  setTimeout(() => {
    const botResponse = `You said: "${userMessage}". How else can I help?`;
    addMessage(botResponse, 'bot');
  }, 1000);
}

    
  }

  useEffect(changer,[]);


  
  

  return (
    <div className='main-container min-h-screen bg-inherit flex items-center justify-center'>
      <div className='w-full max-w-lg shadow-lg rounded-lg overflow-hidden bg-white bg-opacity-10 backdrop-blur-md border border-gray-200 border-opacity-20'>
        
        {/* chat header  */}
        <div className='text-white px-4 py-2 flex justify-between items-center'>
        <h2 class="text-lg font-primary">MindCure - Support System</h2>
        <span class="text-sm font-primary">Let's Chat!</span>
        </div>

        <div id="chat-box" class="p-4 h-96 overflow-y-auto ">
      <div class="message bot mb-3">
        <p class="font-primary text-white p-3 rounded-lg inline-block">Hi! How can I assist you today?</p>
      </div>
    </div>

    <div class="flex p-2 bg-gray-100 border-t">
      <input
        id="chat-input"
        type="text"
        placeholder="Type your message..."
        class="w-full p-2 text-gray-700 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        id="send-button"
        class="ml-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Send
      </button>
    </div>
      </div>
    </div>
  )
}
