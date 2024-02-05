
import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  return (

    <Router>
    <div className="App">
    <Header />
      <Routes>
      <Route exact path="/checkout" element={<>
      
      <Checkout />
      </>} /> 
      <Route exact path="/" element={<><Home/></>}/>   
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
