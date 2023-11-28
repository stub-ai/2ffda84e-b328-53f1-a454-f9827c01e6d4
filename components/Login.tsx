import React from 'react';

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="mb-4 text-2xl">Login</h2>
      <form className="p-4 bg-white rounded shadow-md">
        <input className="w-full p-2 mb-4 border rounded" type="text" placeholder="Username" />
        <input className="w-full p-2 mb-4 border rounded" type="password" placeholder="Password" />
        <button className="w-full p-2 text-white bg-blue-500 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;