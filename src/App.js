/* eslint-disable react/react-in-jsx-scope */

import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyled from './styles/globalStyles';

//Components
import Nav from './Components/Nav';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyled />
      <Nav />
      <Header />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
