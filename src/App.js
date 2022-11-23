import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.scss';

export default function App() {
  return (
    <Router>
      <Header />
    </Router>
  );
}
