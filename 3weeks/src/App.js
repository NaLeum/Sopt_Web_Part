import './App.css';
import SearchInput from './components/SearchInput';
import SearchResult from './components/SearchResult';
import React, { useEffect, useState } from 'react';

import {getUserApi} from './lib/api';

const App = () => {

  const [user,setUser]= useState(null);

  const getUser = async(username) => {
    const data = await getUserApi(username);
    setUser(data);

  }
    

  // useEffect(()=>{
  //   getUser('pa-rang')
  // },[])

return (
  <>
  <SearchInput onSubmit={getUser}/>
  <SearchResult user={user} />
  </>
)
}

export default App;
