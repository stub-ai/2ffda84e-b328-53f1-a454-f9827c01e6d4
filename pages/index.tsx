import React, { useState } from 'react';
import Header from '../components/Header';
import ChatBox from '../components/ChatBox';
import Login from '../components/Login';

const Home = () => {
  // Add a state to check if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow p-4">
        {isLoggedIn ? <ChatBox /> : <Login />}
      </div>
    </div>
  );
};

export default Home;