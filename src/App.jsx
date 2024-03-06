import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Layout } from './layouts/BaseLayout'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import ReviewPage from './pages/ReviewPage'
import AboutPage from './pages/AboutPage'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import DashboardPage from './pages/DashboardPage/DashboardPage'
import UserProfilePage from './pages/UserProfilePage/UserProfilePage'
import CreateMenu from './pages/DashboardPage/Menu/CreateMenu'
import EditMenu from './pages/DashboardPage/Menu/EditMenu'
import DeleteMenu from './pages/DashboardPage/Menu/DeleteMenu'
import CreateCategory from './pages/DashboardPage/Category/CreateCategory'
import EditCategory from './pages/DashboardPage/Category/EditCategory'
import DeleteCategory from './pages/DashboardPage/Category/DeleteCategory'
import CreateTopping from './pages/DashboardPage/Topping/CreateTopping'
import EditTopping from './pages/DashboardPage/Topping/EditTopping'
import DeleteTopping from './pages/DashboardPage/Topping/DeleteTopping'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} >
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/review" element={<ReviewPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/menu/createMenu' element={<CreateMenu />} />
            <Route path='/menu/editMenu/:id' element={<EditMenu />} />
            <Route path='/menu/deleteMenu/:id' element={<DeleteMenu />} />
            <Route path='/category/createCategory' element={<CreateCategory/>} />
            <Route path='/category/editCategory/:id' element={<EditCategory/>} />
            <Route path='/category/deleteCategory/:id' element={<DeleteCategory/>} />
            <Route path='/topping/createTopping' element={<CreateTopping/>} />
            <Route path='/topping/editTopping/:id' element={<EditTopping/>} />
            <Route path='/topping/deleteTopping/:id' element={<DeleteTopping/>} />
            <Route path='/user' element={<UserProfilePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
