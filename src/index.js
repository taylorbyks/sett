import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';

import Home from './pages/Home';
import Treinamentos from './pages/Treinamentos';
import Servicos from './pages/Servicos';
import Contato from './pages/Contato';
import OndeEstamos from './pages/OndeEstamos';
import Pagina404 from './pages/Pagina404';


ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" component={Home} exact/>
    <Route path="/treinamentos" component={Treinamentos} />
    <Route path="/ondeestamos" component={OndeEstamos} />
    <Route path="/serviços" component={Servicos} />
    <Route path="/contato" component={Contato} />
    <Route component={Pagina404} />
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

