/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyled from './styles/globalStyles';

//Components
import Header from './Components/Header';
import About from './Components/About';
import Player from './Components/Player';
import Carousel from './Components/Carousel';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Music from './Components/Music';
import Video from './Components/Videos';

function App() {
  return (
    <Router>
      <GlobalStyled />
      <Header />
      <About />
      <Carousel />
      <Main />
      <Music />
      <Video />
      <Footer />
      <Player />
    </Router>
  );
}

export default App;
