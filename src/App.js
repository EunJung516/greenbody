import './App.css';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';
import MyPage from './pages/MyPage';
import MyLogPage from './pages/MyLogPage';
import CommunityPage from './pages/CommunityPage';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Route exact path="/greenbody/" component={LoginPage}/>
        <Route path="/greenbody/join" component={JoinPage}/>
        <Route path="/greenbody/myPage" component={MyPage}/>
        <Route path="/greenbody/myLog" component={MyLogPage}/>
        <Route path="/greenbody/community" component={CommunityPage}/>
    </Router>
  );
}

export default App;