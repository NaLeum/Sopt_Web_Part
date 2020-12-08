import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/main/Main';
// import Member from './pages/member/Member';
import MainHeader from './components/header/MainHeader';
import React,{ lazy, Suspense } from 'react';

const LazyMember = lazy(()=> import('./pages/member/Member'))

function App() {
  return (
    <Router>
      <div className="App">
        <Route component={MainHeader}/>
        <Suspense fallback={<div>로딩중</div>}>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/members" component={LazyMember} />
            <Route path="*">
              <h1> 404 NOT FOUND </h1>
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
