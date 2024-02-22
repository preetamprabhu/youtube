import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import './App.css'
import {Navbar, Feed,VideoDetail, ChannelDetail,  SearchFeed,  } from './components';
function App() {

  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "black "}}>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Feed/>} />
          <Route path='/video/:id' element={<VideoDetail/>} />
          <Route path='/contact/:id' element={<ChannelDetail/>} />
          <Route path='/search/:searchTerm' element={<SearchFeed/>} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App
