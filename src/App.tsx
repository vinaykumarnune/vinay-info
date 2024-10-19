import React from "react";
import {  Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Blog from "./pages/Blog";
import SingleBlog from "./pages/SingleBlog";
function App() {
  return (
    
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route  path="/category/:categoryid" element={<Blog />} />
        <Route  path="/category/:categoryid/article/:articleid" element={<SingleBlog />} />
        <Route  path="/article/:articleid" element={<SingleBlog />} />
      </Routes>
    
  );
}

export default App;