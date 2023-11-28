import React, { useState, FormEvent } from 'react';

type Message = {
  user: string;
  message: string;
};

const ChatBox = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = (event.currentTarget.elements.namedItem('message') as HTMLInputElement).value;
    setMessages([...messages, { user: 'You', message }]);
    event.currentTarget.reset();
  };

  return (
    <div className="flex flex-col h-full p-4 bg-white rounded shadow-md">
      <div className="overflow-auto mb-4">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.user === 'You' ? 'text-right' : ''}`}>
            <span className="font-bold">{msg.user}: </span>
            <span>{msg.message}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage}>
        <input className="w-full p-2 border rounded" type="text" name="message" placeholder="Type a message..." />
      </form>
    </div>
  );
};

export default ChatBox;