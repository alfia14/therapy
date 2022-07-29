

import React from 'react';
import { useLocation } from 'react-router-dom';
import logo from './logo.svg';
import { Event } from 'containers/Event';
import { Resident } from 'containers/Resident';
import { Home } from 'containers/home';
import { Signin } from 'containers/Signin';
import { Songs } from 'containers/Songs';
import { AuthProvider, ProtectedRoute } from 'containers/Auth';
import { useAuth } from "store/useAuth";

import './App.css';

const NavPages = {
  '#/signin': Signin,
  '/#songs': Songs,
  '#/home': Home,
  '#/events': Event,
  '#/residents': Resident
}


const MainPage = (props) => {
  // const [ searchParams, setSearchParams] = useSearchParams();
  const  {hash } = useLocation()
  
  const Page = NavPages[hash] || NavPages["#/home"]

  if (hash == "#/signin") {
    return <Page { ...props} />
  }
  return (
    <ProtectedRoute>
       <Page { ...props} />
    </ProtectedRoute>
  )
}


const App = () => {
  return (
    <div className="App">
     <MainPage/>
    </div>
  );
}

export default App;
