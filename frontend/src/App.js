import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
// import Welcome from './components/Welcome'

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
          {/* <Route path='/' exact element={<Welcome />} /> */}
            <Route path='/' exact element={<Dashboard />} />
            <Route path='/login' exact element={<Login />} />
            <Route path='/register' exact element={<Register />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
