// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter, Routes, Route} from "react-route-dom"
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <route path="/" element={<Home />}/>
        <route path="/about" element ={About />} />
        <route path="/contact" element={<contact />} />
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
