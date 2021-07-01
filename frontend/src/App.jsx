import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Messages from './components/Messages';
import Login from './components/Login';
import GlobalStyle from './GlobalStyle';
import SApp from './SApp';

export default function App() {
  return (
    <SApp>
      <GlobalStyle />
      <Header />
      <main>
        <Nav />
        <Switch>
          <Route exact path='/' component={Messages} />
          <Route path='/login' component={Login} />
        </Switch>
      </main>
    </SApp>
  );
}
