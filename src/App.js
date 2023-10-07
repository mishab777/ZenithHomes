import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Navbar';
import Properties from './components/Properties';
import Contact from './components/Contact';
import About from './components/About';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Nav/>}>
          <Route index element={<Home/>}/>
          <Route path='Properties' element={<Properties/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='About' element={<About/>}/>
          <Route path='Services' element={<Services/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
