import { Routes, Route } from "react-router-dom";
import { Answer } from '../HomePageComponents/Answer';
import { NoRoute } from './NoRoutes';
import { Login } from './LoginPage';
import { Home } from '../HomePageComponents/Home';
import About from '../Components/About';
import Career from '../Components/Career';
import { Profile } from "./Profile";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/answer" element={<Answer />} />
      <Route path='/login' element={<Login />} />
      <Route path="*" element={<NoRoute />} />
      <Route path="/about" element={<About />} />
      <Route path="/careers" element={<Career />} />
      <Route path="/profile" element={<Profile />} />
      {/* <Route path = "/notifications" element = {<Notification />} /> */}
    </Routes>
  )
}
