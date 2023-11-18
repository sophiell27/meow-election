import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layoutpage from './pages/LayoutPage/LayoutPage';
import HomePage from './pages/HomePage/HomePage';
import IntroPage from './pages/IntroPage/IntroPage';
import AboutPage from './pages/AboutPage/AboutPage';
import NewsPage from './pages/NewsPage/NewsPage';
import DonatePage from './pages/DonatePage/DonatePage';
import ContactPage from './pages/ContactPage/ContactPage';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layoutpage />}>
                <Route path='' element={<HomePage />} />
                <Route path='news' element={<NewsPage />} />
                <Route path='about' element={<AboutPage />} />
                <Route path='donate' element={<DonatePage />} />
                <Route path='contact' element={<ContactPage />} />
                <Route path='intro' element={<IntroPage />} />
                {/* <Route path='*' element={<NoMatch />} /> */}
            </Route>
        </Routes>
    );
}

export default App;
