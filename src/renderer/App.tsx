import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import TaskCard from './components/TaskCard';
import AppTabList from './components/TabList';
import './App.css';

function Hello() {
  return (
    <div>
      <div className="Hello">
        <TaskCard />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppTabList />} />
      </Routes>
    </Router>
  );
}
