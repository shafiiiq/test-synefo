import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import BookingForm from './pages/BookingForm/BookingForm';
import BookingSummary from './pages/BookingSummary/BookingSummary';
import CheckStatus from './pages/CheckStatus/CheckStatus';

function App() {
  return (
    <Routes>
      <Route path='/booking-form' element={<BookingForm />} />
      <Route path='/booking-summary' element={<BookingSummary />} />
      <Route path='/check-status' element={<CheckStatus />} />
    </Routes>
  );
}

export default App;
