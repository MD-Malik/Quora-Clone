import './App.css';
import { AllRoutes } from './Routes/AllRoutes';
import { Navbar } from './HomePageComponents/Navbar';
import { Login } from './Routes/LoginPage';


function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Login />
    </div>
  );
}

export default App;
