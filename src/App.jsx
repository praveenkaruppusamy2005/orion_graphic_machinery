import { useState } from 'react';
import Home from './components/Home'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AboutUs from './components/Aboutus';
import Reviews from './components/Reviews';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
      <Route path='/reviews' element={<Reviews />} />
      </Routes>
    </Router>
  )
}
export default App
