import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Mainmenu from './homepage/Mainmenu';
import Footer from './homepage/Footer';
import Productdetail from './productpage/Productdetail';
import Cart from './homepage/Cart';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';

// import { decrement, increment, val } from './slice/counterSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import { useState } from 'react';

function App() { 

  // const data = useSelector(state => state.counter.value)
  // const dispatch = useDispatch()
  // const [val, setval] = useState(1);
  // djbsjs
  return (
    <>
      <div className='backcolor'>
        
        <Mainmenu />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product/:id" element={<Productdetail/>} />
          <Route path="/cart" element={<Cart/>} ></Route>
        </Routes>
        <Footer />
      
      </div>
    </>
  );
}

export default App;
