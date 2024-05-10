import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route, Router } from 'react-router-dom';
import Home from './Component/Home';
import Navigation from './Component/Navigation';
import { AllNews } from './Component/Allnews';
import TopHeadLines from './Component/TopHeadline';
import TopSports from './Component/Sports';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/allnews' element={<AllNews/>} ></Route>
        <Route path='/topnews' element={<TopHeadLines/>} ></Route>
        <Route path='/topsports' element={<TopSports/>} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
