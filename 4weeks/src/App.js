import './App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainHeader from './components/header/MainHeader';
import Member from './pages/member/Member';

function App() {
  return (
    <Router>
      <div className='App'>
      <Route component={MainHeader}/>
      <Switch>
        <Route exact path='/'>Main page</Route>
        <Route path='/members' component={Member}/>
        <Route path='/*'>404 Not Found</Route>
      </Switch>
      </div>
    </Router>

  );
}

export default App;
