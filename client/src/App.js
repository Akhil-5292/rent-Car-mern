
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import BookingCar from './Pages/BookingCar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}  />
      <Route path='/login' element={<Login/>}  />
      <Route path='/register' element={<Register/>}  />
      <Route path='/bookingcar' element={<BookingCar/>}  />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
