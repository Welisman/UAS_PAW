import Login from './components/Login';
import Home from './components/home/Home';
import Notifications from './components/home/notifocations/Notifications';
import Messages from './components/home/messages/Messages';
import Profile from './components/home/profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Explore from './components/home/explore/Explore';
import HomeLayout from './components/layout/HomeLayout';



function ProjectApp() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home/" element={<HomeLayout />} >
            <Route index element={<Home />} />
            <Route path="/home/explore" element={<Explore />} />
            <Route path="/home/notifications" element={<Notifications />} />
            <Route path="/home/profile" element={<Profile />} />
            <Route path="/home/messages" element={<Messages />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default ProjectApp;