import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './component';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Feed />} />
          <Route exact path='/youtube_clone/' element={<Feed />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App