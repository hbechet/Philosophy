import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import NotFound from '../views/NotFound';
import Philosophers from '../views/Philosophers';
import UpdateElement from '../views/UpdateElement';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import Schools from '../views/Schools';
import ModifiedElement from '../views/ModifiedElement';
import ViewElement from '../views/ViewElement';
import Update from '../views/Update';
import NewElement from '../views/NewElement';

function Router() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/philosophers" element={<Layout><Philosophers /></Layout>} />
        <Route path="/view/:collection/:id" element={<Layout><ViewElement /></Layout>} />
        <Route path="/update/:collection/:id" element={<Layout><Update /></Layout>} />
        <Route path="/new/:collection" element={<Layout><NewElement /></Layout>} />
        <Route path="/schools" element={<Layout><Schools /></Layout>} />
        <Route path="/updateelement/:id" element={<Layout><UpdateElement /></Layout>} />
        <Route path="/modifiedelement" element={<Layout><ModifiedElement /></Layout>} />
        <Route path="*" element={<Layout><NotFound /></Layout>} />
      </Routes>
    </BrowserRouter>
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
