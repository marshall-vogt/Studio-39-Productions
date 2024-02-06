import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import { Route, Routes} from 'react-router-dom';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Schedule from './pages/Schedule';
import Rates from './pages/Rates';
import Services from './pages/Services';
import Equipment from './pages/Equipment';

export default function App() {

  return (
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/rates" element={<Rates />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  );
}