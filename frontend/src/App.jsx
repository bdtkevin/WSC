import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import User from './contexts/User';
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import SApp from './SApp';

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <SApp>
      <GlobalStyle />
      <User.Provider value={{ user, setUser }}>
        <Header />
        <main>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
          </Switch>
        </main>
      </User.Provider>
    </SApp>
  );
}
