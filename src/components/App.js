import React from 'react';
import  { MainPage } from './main';
import { SearchPage } from './search';
import { BuildPage } from './build';
import { ComparePage } from './compare';
import { Routes, Route } from 'react-router-dom'

import '../style.css';

export default function App(props) {
  return (
    <Routes >
      <Route index element={ <MainPage /> } />
      <Route path='/search' element={ <SearchPage /> } />
      <Route path='/build' element={ <BuildPage /> } />
      <Route path='/compare' element={ <ComparePage /> } />
    </Routes>
  )
}