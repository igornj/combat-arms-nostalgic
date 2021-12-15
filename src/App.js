/* eslint-disable react/react-in-jsx-scope */

import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyled from './styles/globalStyles';

//Components
import Nav from './Components/Nav';
import Header from './Components/Header';

function App() {
  return (
    <Router>
      <GlobalStyled />
      <Nav />
      <Header />
    </Router>
  );
}

export default App;
