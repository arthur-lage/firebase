import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SeeStudents from './pages/SeeStudents'
import Home from './pages/Home'
import CreateStudent from './pages/CreateStudent'
import DeleteStudent from './pages/DeleteStudent';
import UpdateStudent from './pages/UpdateStudent';
import UpdateSpecificStudent from './pages/UpdateSpecificStudent'

import './styles/global.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={< SeeStudents />} />
          <Route path="/students/create" element={< CreateStudent />} />
          <Route path="/students/update/" element={< UpdateStudent />} />
          <Route path="/students/update/:id" element={< UpdateSpecificStudent />} />
          <Route path="/students/delete/" element={< DeleteStudent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
