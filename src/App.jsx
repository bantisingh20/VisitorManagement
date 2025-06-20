import { useState } from 'react' 
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
 

function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login"></Navigate>} />
        <Route path="/login" element={<div>login compoennet</div>} />
        <Route path="/sing-in" element={<div>signin compoennet</div>} />
        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </>
  )
}

export default App
