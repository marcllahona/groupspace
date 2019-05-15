import Home from '../pages/Home';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import Add from "../pages/Add";
import Explore from "../pages/Explore";

const routes = [
  {
    path: '/login',
    component: Login,
    exact: true,
    private: false
  },
  {
    path: '/registration',
    component: Registration,
    exact: true,
    private: false
  },
  {
    path: '/explore',
    component: Explore,
    exact: true,
    private: true
  },
  {
    path: '/add',
    component: Add,
    exact: true,
    private: true
  },
  {
    path: '/home/:group?/:channel?',
    component: Home,
    exact: true,
    private: true
  },
];

export default routes;
