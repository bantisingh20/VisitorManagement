// src/Visitor/Pages/VisitorLayout.jsx

import React from 'react';
// import { Outlet } from 'react-router-dom';
// import { VisitorHeader, Footer } from '../Component/VisitorHeader'; 

const VisitorLayout = () => {
  return (
   <>
    <div className="min-h-screen bg-gray-50 flex flex-col">
 
      {/* <VisitorHeader /> */}
 
      <div className="flex-grow overflow-auto">
       
        {/* <Outlet />    */}
      </div>
 
      {/* <Footer /> */}
    </div>
    </>
  );
};

export default VisitorLayout;
