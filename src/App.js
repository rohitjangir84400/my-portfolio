import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
// import Preloader from './components/preloader';
import About from './pages/about';
import Certifications from './pages/caertificates';
import Experience from './pages/experience';
import Home from './pages/home';
import Projects from './pages/projects';
import Skills from './pages/skills';

function App() {
  return (
    <>
      {/* <Preloader></Preloader> */}
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Experience />
              <Projects />
              <Certifications />
              <Skills />
              <About />
              <Footer />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
