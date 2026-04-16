import './App.css'
import { Home } from './pages/Home/Home'
import {Routes, Route} from 'react-router-dom'
import { Login } from './pages/Login/Login'
import { UserProvider } from './context/UserContext'

function App() {

  return (
    <>
      <UserProvider>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </UserProvider>
    </>
  )
}

export default App
