import React, { useState } from 'react';

import {useNavigate} from 'react-router-dom'; 

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = (role) => {
    navigate(`/${role}-dashboard`)
    alert(`Logging in as ${role}`); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">VMS</h2>

        <div className="flex flex-col space-y-4">
 
          <div className="space-y-2">
            <button 
              onClick={() => handleLogin('Receptionist')}
              className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Receptionist Login
            </button>
            <button 
              onClick={() => handleLogin('Employee')}
              className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
            >
              Employee Login
            </button>
            <button 
              onClick={() => handleLogin('Visitor')}
              className="w-full py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition duration-300"
            >
              Visitor Login
            </button>
          </div>
 
          <div className="mt-6">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button 
              onClick={() => handleLogin('Main')}
              className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
