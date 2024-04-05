import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import './App.css'
import {Navbar, Feed,VideoDetail, ChannelDetail,  SearchFeed } from './components';
function App() {

  return (
    <BrowserRouter>
    <div className="App">

      <Box sx={{ backgroundColor: "black "}} minWidth='80vw'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/video/:id' element={<VideoDetail/>} />
          <Route path='/channel/:id' element={<ChannelDetail/>} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </Box>
    </div>
    </BrowserRouter>
  )
}

export default App
