import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Pages/Home/Home'
import Destinos from './Pages/Destinos/Destinos'
import Promocoes from './Pages/Promocoes/Promocoes'
import Contato from './Pages/Contato/Contato'
import ListaMensagens from './Pages/ListaMensagens/ListaMensagens'
import ListaAgendamentos from './Pages/ListaAgendamentos/ListaAgendamentos'
import EditarMensagens from './Pages/EditarMensagens/EditarMensagens'
import EditarAgendamentos from './Pages/EditarAgendamentos/EditarAgendamentos'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>}></Route>
      </Routes>
      <Routes>
        <Route path="/Destinos" element={<Destinos/>}></Route>
      </Routes>
      <Routes>
        <Route path="/Promocoes" element={<Promocoes/>}></Route>
      </Routes>
      <Routes>
        <Route path="/Contato" element={<Contato/>}></Route>
      </Routes>
      <Routes>
        <Route path="/ListaMensagens" element={<ListaMensagens/>}></Route>
      </Routes>
      <Routes>
        <Route path="/ListaAgendamentos" element={<ListaAgendamentos/>}></Route>
      </Routes>
      <Routes>
        <Route path="/EditarMensagens" element={<EditarMensagens/>}></Route>
      </Routes>
      <Routes>
        <Route path="/EditarAgendamentos" element={<EditarAgendamentos/>}></Route>
      </Routes>
    </Router>
    {/*<Contato></Contato>*/}
    {/*<Promocoes></Promocoes>*/}
    {/*<Home></Home>*/}
  </React.StrictMode>,
  document.getElementById('root')
);

