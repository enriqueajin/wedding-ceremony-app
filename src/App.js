import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Invitation from './pages/Invitation';

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Invitation />}>,</Route>
      </Routes>
    </BrowserRouter>
  )
};