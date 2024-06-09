import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Invitation from './pages/Invitation';

export default function App() {
  return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Invitation />}></Route>
      </Routes>
    </BrowserRouter>
  )
};