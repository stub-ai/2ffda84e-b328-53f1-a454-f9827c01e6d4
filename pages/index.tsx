import React from 'react';
import Header from '../components/Header';
import ChatBox from '../components/ChatBox';

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow p-4">
        <ChatBox />
      </div>
    </div>
  );
};

export default Home;