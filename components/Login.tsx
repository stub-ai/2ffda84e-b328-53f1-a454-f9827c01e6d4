import React, { useState, FormEvent } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    // Add your authentication logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="mb-4 text-2xl">Login</h2>
      <form className="p-4 bg-white rounded shadow-md" onSubmit={handleLogin}>
        <input className="w-full p-2 mb-4 border rounded" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input className="w-full p-2 mb-4 border rounded" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="w-full p-2 text-white bg-blue-500 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;