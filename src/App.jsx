import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import ProjectPage from './pages/project';
import AboutMe from './pages/about';
import Contact from './pages/contact';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<ProjectPage />} />
          <Route path='/about' element={<AboutMe />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
