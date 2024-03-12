import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Category from './pages/Category/Category';
import Footer from './components/Footer/Footer';
import Quizpage from './pages/Quizpage/Quizpage'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/quizzes' element={<Home/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/quizpage' element={<Quizpage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
//test
