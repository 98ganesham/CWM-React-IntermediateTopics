import { Outlet } from 'react-router-dom';
import NavBar from '../state-management/NavBar';

const Layout = () => {
  return (
    <>
      <NavBar />
      <div id="main">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;