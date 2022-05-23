import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar';

// toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard.js/Dashboard';
import MyAppointments from './Pages/Dashboard.js/MyAppointments';
import MyReview from './Pages/Dashboard.js/MyReview';
import MyHistory from './Pages/Dashboard.js/MyHistory';
import Users from './Pages/Dashboard.js/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddDoctor from './Pages/Dashboard.js/AddDoctor';
import ManageDoctors from './Pages/Dashboard.js/ManageDoctors';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12' >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='appointment' element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        }></Route>

        {/* nested route */}
        <Route path='dashboard' element={<RequireAuth> <Dashboard />  </RequireAuth>}>
          {/* 1st main route a index hoy, onno sob a path hobe */}
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path='review' element={<MyReview />}></Route>
          <Route path='history' element={<MyHistory />}></Route>
          <Route path='users' element={<RequireAdmin><Users /></RequireAdmin>}></Route>
          <Route path='addDoctor' element={<RequireAdmin><AddDoctor /></RequireAdmin>}></Route>
          <Route path='manageDoctor' element={<RequireAdmin><ManageDoctors /></RequireAdmin>}></Route>

        </Route>

        <Route path='login' element={<Login />}></Route>
        <Route path='signup' element={<SignUp />}></Route>
      </Routes>

      <ToastContainer />

    </div>
  );
}

export default App;
