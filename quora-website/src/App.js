import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { store } from './Redux/store';
import { Home } from './Routes/HomePage';
import { Login } from './Routes/LoginPage';
import { NoRoute } from './Routes/NoRoutes';

function App() {
  const store = useSelector((state)=>state)
  console.log(store)
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/' element={<Home />} />
        <Route path="*" element={<NoRoute />} />
      </Routes>
    </div>
  );
}

export default App;
