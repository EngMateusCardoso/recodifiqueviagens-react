import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './Pages/Home/HomePage'
import DestinosPage from './Pages/Destinos/DestinosPage'
import PromocoesPage from './Pages/Promocoes/PromocoesPage'
import ContatoPage from './Pages/Contato/ContatoPage'
import ListaMensagensPage from './Pages/ListaMensagens/ListaMensagensPage'
import ListaAgendamentosPage from './Pages/ListaAgendamentos/ListaAgendamentosPage'
import EditarMensagensPage from './Pages/EditarMensagens/EditarMensagensPage'
import EditarAgendamentosPage from './Pages/EditarAgendamentos/EditarAgendamentosPage'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage/>}></Route>
      </Routes>
      <Routes>
        <Route path="/Destinos" element={<DestinosPage/>}></Route>
      </Routes>
      <Routes>
        <Route path="/Promocoes" element={<PromocoesPage/>}></Route>
      </Routes>
      <Routes>
        <Route path="/Contato" element={<ContatoPage/>}></Route>
      </Routes>
      <Routes>
        <Route path="/ListaMensagens" element={<ListaMensagensPage/>}></Route>
      </Routes>
      <Routes>
        <Route path="/ListaAgendamentos" element={<ListaAgendamentosPage/>}></Route>
      </Routes>
      <Routes>
        <Route path="/EditarMensagens/:id" element={<EditarMensagensPage/>}></Route>
      </Routes>
      <Routes>
        <Route path="/EditarAgendamentos/:id" element={<EditarAgendamentosPage/>}></Route>
      </Routes>
    </Router>
    {/*<Contato></Contato>*/}
    {/*<Promocoes></Promocoes>*/}
    {/*<Home></Home>*/}
  </React.StrictMode>,
  document.getElementById('root')
);

