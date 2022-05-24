import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Home/Login/Login';
import SignUp from './Components/Home/Login/SignUp';
import OurProducts from './Components/Home/OurProducts/OurProducts';
import Profile from './Components/Home/Profile';
import RequireAuth from './Components/Home/RequireAuth';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Components/Home/Dashboard/Dashboard';
import MyOrder from './Components/Home/Dashboard/MyOrder';
import MyReview from './Components/Home/Dashboard/MyReview';
import User from './Components/Home/Dashboard/User';
import RequireAdmin from './Components/Home/Login/RequireAdmin';
function App() {
  return (
    <div className='bg-slate-200' >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/ourProducts' element={
          <RequireAuth>
            <OurProducts />
          </RequireAuth>
        }></Route>

        <Route path='/dashBoard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyOrder />}></Route>
          <Route path='myReview' element={<MyReview />}></Route>
          <Route path='users' element={<RequireAdmin><User /></RequireAdmin>}></Route>

        </Route>

        <Route path='/profile' element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
