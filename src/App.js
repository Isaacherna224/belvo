import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';

import Login from './Auth/Login';
import Register from './Auth/Register';

function Home() {
  return (
    <div>
      <h1>Bienvenido</h1>
      <Link to="login">Iniciar Sesión</Link>
      <br></br>
      <Link to="register">Registrarr un nuevo usuario</Link>
      <hr />
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
