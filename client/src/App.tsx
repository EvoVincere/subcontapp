import React from 'react';
import {Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import AddGoods from './pages/AddGoods';
import EditGoods from './pages/EditGoods';
import DeleteGoods from './pages/DeleteGoods';
import ShowGood from './pages/ShowGood';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/goods/add' element={<AddGoods />} />
      <Route path='/goods/edit/:id' element={<EditGoods />} />
      <Route path='/goods/details/:id' element={<ShowGood />} />
      <Route path='/goods/delete/:id' element={<DeleteGoods />} />
    </Routes>
  );
}

export default App;
