import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Layout from './layouts/BaseLayout'
import MenuPage from './pages/MenuPage'
import ReviewPage from './pages/ReviewPage'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} >
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/menu" element={<MenuPage/>} />
            <Route path="/review" element={<ReviewPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
