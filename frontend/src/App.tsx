import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SeeStudents from './pages/SeeStudents'
import Home from './pages/Home'
import CreateStudent from './pages/CreateStudent'

import './styles/global.css'
import DeleteStudent from './pages/DeleteStudent';
import UpdateStudent from './pages/UpdateStudent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={< SeeStudents />} />
          <Route path="/students/create" element={< CreateStudent />} />
          <Route path="/students/update/" element={< UpdateStudent />} />
          <Route path="/students/delete/" element={< DeleteStudent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
