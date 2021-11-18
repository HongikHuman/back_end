import './App.css';

import React from "react";
import { BrowserRouter } from 'react-router-dom';

import Navigationbar from './component/Navigationbar';

import Footer from './component/Footer';
import Router from './Router';



export default function App() {


  return (
    <BrowserRouter>
      <div className = "App">
        <Navigationbar />
        <Router/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}


