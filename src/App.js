import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Error from './pages/ErrorPage/ErrorPage';
import Home from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
