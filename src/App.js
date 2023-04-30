import './App.css';
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from"react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
// import Post from './Components/PostItem';
// import Scenic from '//Components/Scenic';
// import Navbar2 from './Components/Navbar2';
import Post from './Components/Post';


const App=()=> {
  return (
    <>
    <Router>
      <Navbar/>
      {/* <Post/> */}
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home/>} />
           <Route exact path="/Post" element={<Post />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
