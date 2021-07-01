import { useState } from 'react';
import GlobalStyle from './GlobalStyle';
import User from './contexts/User';
import Header from './components/Header';
import SApp from './SApp';

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <SApp>
      <GlobalStyle />
      <User.Provider value={{ user, setUser }}>
        <Header />
        <main>
          <p>toto</p>
        </main>
      </User.Provider>
    </SApp>
  );
}
