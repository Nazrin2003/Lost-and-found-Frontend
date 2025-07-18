import logo from './logo.svg';
import './App.css';
import ViewItems from './components/ViewItems';
import SearchItem from './components/SearchItem';
import FoundItem from './components/FoundItem';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      {/* <Route path='/' element={<Home/>} /> */}
      {/* <Route path='/' element={<FoundItem/>} /> */}
      {/* <Route path='/' element={<SearchItem/>} /> */}
      <Route path='/' element={<ViewItems/>} />
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
