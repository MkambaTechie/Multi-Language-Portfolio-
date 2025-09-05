import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Menu } from './components/Menu';
import { Home } from './pages/Home';
import { Suspense } from 'react';
import About from './pages/About';
import Footer from './pages/Footer'; 
import Projects from './pages/Projects';
import Resume from './pages/Resume';



const App = () => {

  return (
    <Suspense fallback='loading'>
      <BrowserRouter>
        <Menu />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/Project' element={<Projects />} />
          <Route path='/Resume' element={<Resume />} />
        </Routes>

        <Footer /> 
      </BrowserRouter>
    </Suspense>
  )
}
export default App