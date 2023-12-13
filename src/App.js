
import './App.css';
import { Carrosel1 } from './components/pagina1/Carrosel1';
import { Footer1 } from './components/Footer1';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavBar1 } from './components/NavBar1';
import { Piquemacho2 } from './components/pagina3/Piquemacho2';
import { Platopaceño } from './components/pagina4/Platopaceño';
import { Formulario } from './components/pagina2/Formulario';
import { Pacufrito } from './components/pagina5/Pacufrito';
import { Thimpu1 } from './components/pagina6/Thimpu1';
import { Calapurca1 } from './components/pagina7/Calapurca1';
import { Majadito7 } from './components/pagina8/Majadito7';
import { Ranga9 } from './components/Pagina9/Ranga9';
import { Acercademi } from './components/pagina10/Acercademi';
import { Principal } from './components/pagina1/Principal';
function App() {
  return (
    <div classname="app">
      <Router>
        <NavBar1 />
        <Routes>

          <Route path="/principal" element={<Carrosel1 />} />
          <Route path="/Piquemacho2" element={<Piquemacho2 />} />
          <Route path="/Platopaceño" element={<Platopaceño />} />
          <Route path="/Formulario" element={<Formulario />} />
          <Route path="/Pacufrito" element={<Pacufrito />} />
          <Route path="/Thimpu1" element={<Thimpu1 />} />
          <Route path="/Calapurca1" element={<Calapurca1 />} />
          <Route path="/Majadito7" element={<Majadito7 />} />
          <Route path="/Ranga9" element={<Ranga9 />} />
          <Route path="/Acercademi" element={<Acercademi />} />
        </Routes>
      </Router>
      <Principal />
      <Footer1 />

    </div>

  );
}

export default App;
