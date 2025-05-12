
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    const res = await axios.post('http://localhost:5005/webhooks/rest/webhook', {
      sender: 'user',
      message: input
    });
    setMessages([...messages, { text: input, sender: 'user' }, ...res.data]);
    setInput('');
  };

  return (
    <div>
      <h1>Customer Support Chatbot</h1>
      {messages.map((msg, index) => (
        <p key={index}><strong>{msg.sender === 'user' ? 'You' : 'Bot'}:</strong> {msg.text}</p>
      ))}
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type your message..." />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
