import './App.css';
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from"react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Post from './Components/Post';
// import Navbar2 from './Components/Navbar2';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Post/>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          {/* <Route exact path="/about" element={<About />} />
          <Route exact path="/ContactUs" element={<ContactUs/>} /> */}
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
