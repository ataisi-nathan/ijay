import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__content">
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
