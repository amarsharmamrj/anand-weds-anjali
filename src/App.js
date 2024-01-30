import logo from './logo.svg';
import './App.css';
import { Grid } from '@mui/material'
import TopCarousel from './components/TopCarousel';
import Countdown from './components/Countdown';
import Invitation from './components/Invitation';
import Events from './components/Events';
import Attending from './components/Attending';
import ThankYou from './components/ThankYou';
import cornerImageLeft from './assests/flowers/left-image.png'
import cornerImageRight from './assests/flowers/right-image.png'
 
function App() {
  return (
    <div className="app">
      <div className="main-container">
        <Grid container>
          <TopCarousel />
          <Countdown />
          <Invitation />
          <Events />
          <Attending />
          <ThankYou />
          <img className="corner-image-left" src={cornerImageLeft} alt="" />
          <img className="corner-image-right" src={cornerImageRight} alt="" />
        </Grid>
      </div>
    </div>
  );
}

export default App;
