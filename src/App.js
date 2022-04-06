import React, {useEffect} from 'react';
import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

import axios from 'axios';

const App = () => {

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://google-search3.p.rapidapi.com/api/v1/search/q=elon+musk',
      headers: {
        'X-User-Agent': 'desktop',
        'X-Proxy-Location': 'EU',
        'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
        'X-RapidAPI-Key': 'f5dba91847msh261460c6674191ap14340ajsn25540e453ac8'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  },[])

  return (
    <div className='App'>
      <Header/>
    </div>
  )
}

export default App