import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';

import Header from './components/ui/shared/header';

import Home from './components/Home';
import LoginRoleSelection from './components/LoginRoleSelection';
import LoginStudent from './components/LoginStudent';
import SearchResults from './components/SearchResults';
import RoomDetail from './components/RoomDetail';
import Reserve from './components/Reserve';
import MyReservations from './components/MyReservations';
import ReservationDetail from './components/ReservationDetail';

import './App.css'

function App() {
  return (
    <div className='relative h-full w-full min-h-[100dvh]'>
      <Router>
        <Header />
        <div className='relative w-full'>

          <ToastContainer
            className='text-start'
            position="bottom-right"
            autoClose={3000}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme="light"
          />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginRoleSelection />} />
            <Route path="/login/student" element={<LoginStudent />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/room-details/:room_id" element={<RoomDetail />} />
            <Route path="/reserve/:room_id" element={<Reserve />} />
            <Route path="/my-reservations" element={<MyReservations />} />
            <Route path="/my-reservations/:reservationId" element={<ReservationDetail />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App
