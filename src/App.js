// import { ButtonComponent } from "./components/button/ButtonComponent";
// import Router from "./router/Router";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import Login from "./pages/auth/Login"
import Home from "./pages/DashBoard/Home/Home"
import Dashboard from "./pages/DashBoard/DashBoard"
import ProtectedRoute from './router/ProtectedRoute';

function App() {

  return (
    // <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/modules/*" element={<ProtectedRoute element={<Dashboard />} />} />
    </Routes>
  // </Router>
  );
}

export default App;
