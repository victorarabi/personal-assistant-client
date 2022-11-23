import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import LoginCard from './components/LoginCard/LoginCard';
import './App.scss';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <LoginCard />
        </Route>
      </Switch>
    </Router>
  );
}
