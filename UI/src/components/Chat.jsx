import React, { useEffect, useState, useRef } from 'react';

export default function Chat() {
  const [isRecording, setIsRecording] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [chunks, setChunks] = useState([]);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  // Gathering the camera information
  useEffect(() => {
    const getCameraStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
      } catch (err) {
        console.error('Error accessing camera: ', err);
      }
    };
    getCameraStream();
  }, []);

  // Capture the current frame of the video
  const captureFrame = () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL('image/jpeg'); // Base64 encoding
  };

  // Handle message sending to backend
  const sendMessageToBackend = async (message) => {
    const frame = captureFrame(); // Get the current frame
    const payload = { message, frame };

    try {
      const response = await fetch('http://localhost:5000/api/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Backend Response:', data);

      // Add the bot's reply to the chat
      if (data.reply) {
        addMessage(data.reply, 'bot');
      }
    } catch (error) {
      console.error('Error sending data to backend:', error);
      addMessage('Sorry, something went wrong. Please try again.', 'bot');
    }
  };

  const handleSendMessage = () => {
    const inputField = document.getElementById('chat-input');
    const userMessage = inputField.value.trim();
    if (userMessage) {
      addMessage(userMessage, 'user');
      inputField.value = '';
      sendMessageToBackend(userMessage); // Send to backend
    }
  };

  const addMessage = (message, sender) => {
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
    chatBox.scrollTop = chatBox.scrollHeight;
  };

  useEffect(() => {
    document.getElementById('send-button').addEventListener('click', handleSendMessage);
    document.getElementById('chat-input').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleSendMessage();
    });
  }, []);

  return (
    <div className='main-container min-h-screen bg-inherit flex items-center justify-center'>
      <div className='w-full max-w-lg shadow-lg rounded-lg overflow-hidden bg-white bg-opacity-10 backdrop-blur-md border border-gray-200 border-opacity-20'>
        <div className='text-white px-4 py-2 flex justify-between items-center'>
          <h2 className="text-lg font-primary">MindCure - Support System</h2>
          <span className="text-sm font-primary">Let's Chat!</span>
        </div>

        <div id="chat-box" className="p-4 h-96 overflow-y-auto">
          <div className="message bot mb-3">
            <p className="font-primary text-white p-3 rounded-lg inline-block">
              Hi! How can I assist you today?
            </p>
          </div>
        </div>

        <div className="flex p-2 bg-gray-100 border-t">
          <input
            id="chat-input"
            type="text"
            placeholder="Type your message..."
            className="w-full p-2 text-gray-700 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            id="send-button"
            className="ml-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Send
          </button>
        </div>
      </div>

      <div>
        <video ref={videoRef} autoPlay muted width="400" />
      </div>
    </div>
  );
}
