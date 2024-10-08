import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import NotFound from '../views/NotFound';
import Philosophers from '../views/Philosophers';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import Schools from '../views/Schools';
import ViewElement from '../views/ViewElement';
import UpdateElement from '../views/UpdateElement';
import NewPhilo from '../views/NewPhilo';
import Login from '../views/Login';
import UserProfile from '../views/UserProfile';
import PrivateRoute from '../components/PrivateRoute';
import UsersPage from '../views/Users';
import { AuthProvider } from '../context/AuthContext';
import NewSchool from '../views/NewSchool';

function Router() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/philosophers" element={<Layout><Philosophers /></Layout>} />
          <Route path="/view/:collection/:id" element={<Layout><ViewElement /></Layout>} />
          <Route path="/update/:collection/:id" element={<PrivateRoute role="client"><Layout><UpdateElement /></Layout></PrivateRoute>} />
          <Route path="/new/philo" element={<PrivateRoute role="client"><Layout><NewPhilo /></Layout></PrivateRoute>} />
          <Route path="/new/school" element={<PrivateRoute role="client"><Layout><NewSchool /></Layout></PrivateRoute>} />
          <Route path="/schools" element={<PrivateRoute role="client"><Layout><Schools /></Layout></PrivateRoute>} />
          <Route path="/login" element={<Layout><Login /></Layout>} />
          <Route path="/profile" element={<PrivateRoute role="client"><Layout><UserProfile /></Layout></PrivateRoute>} />
          <Route path="/users" element={<PrivateRoute role="admin"><Layout><UsersPage /></Layout></PrivateRoute>} />
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);



export default Router;
