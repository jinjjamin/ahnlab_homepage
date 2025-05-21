import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Element
import Main from '../Pages/Main';

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Main />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
