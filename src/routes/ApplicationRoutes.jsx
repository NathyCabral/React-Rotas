import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from '../pages/Sobre/Sobre'
import Diario from '../pages/Diario/Diario'
import Portfolio from '../pages/Portfolio/Portfolio'
import Comentarios from '../pages/Comentarios/Comentarios'
import Menu from '../components/Menu/Menu'


function ApplicationRoutes() {
  return (
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path="/" element={<Sobre/>} />
        <Route path="diario" element={<Diario />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="comentarios" element={<Comentarios />} />       
      </Routes>
    </BrowserRouter>
   
  );
}

export default ApplicationRoutes;
