import React, {useState, useEffect} from 'react';
import { Navbar } from './navbar';
import  { MainPage } from './main';
import { SearchPage } from './search';
import { BuildPage } from './build';
import { ComparePage } from './compare';
import { SignInPage } from './signInPage';
import { Routes, Route } from 'react-router-dom'
import { getDatabase, ref, push} from 'firebase/database'


import '../style.css';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default function App(props) {
  const [currUser, setCurrUser] = useState({ });
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (firebaseUserObj) => {
      if(firebaseUserObj) {
        console.log('auth state changed')
        console.log('logged in: ' + firebaseUserObj.uid);
        setCurrUser(firebaseUserObj);
      } else {
        console.log('logged out')
      }

    })
  }, [])

  const db = getDatabase();

  let buildsRef;

  if (currUser.uid) {
    buildsRef = ref(db, 'builds/' + currUser.uid);
  } else {
    const newRef = push(ref(db, 'builds'));
    const buildKey = newRef.key;
    buildsRef = ref(db, 'builds/' + buildKey);
  }

  return (
    <div>
      <Navbar currUser={currUser}/>
      <Routes >
        <Route index element={ <MainPage currUser={currUser}/> } />
        <Route path='/search' element={ <SearchPage currUser={currUser} buildsRef={buildsRef} /> } />
        <Route path='/build' element={ <BuildPage currUser={currUser}/> } />
        <Route path='/compare' element={ <ComparePage currUser={currUser} /> } />
        <Route path='/login' element={<SignInPage />} />
      </Routes>
    </div>

  )
}