import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Agenda from '../pages/agenda'
import Cadastro from '../pages/cadastro'
import Consulta from '../pages/consulta'
import Exame from '../pages/exame'
import ReceitaGuia from '../pages/receita&guia'
import PostarExames from '../pages/postarExame';
import Home from '../pages/home';
import PageNotFound from '../pages/notFound'
import VisualizarMedico from '../pages/medico';

const Rotas: React.FC = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;