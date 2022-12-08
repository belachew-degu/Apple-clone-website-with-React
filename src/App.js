import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Alertsection from './Components/Alertsection'
import Firstsection from './Components/Firstsection'
import Secondsection from './Components/Secondsection'
import Thirdsection from './Components/Thirdsection'
import Fourthsection from './Components/Fourthsection'
import Fifthsection from './Components/Fifthsection'
import Sixthsection from './Components/Sixthsection'

import  './commonResource/css/styles.css'
import  './commonResource/css/bootstrap.css'
import './Components/Expand.js'
function App() {
  return (
    
    <div>
    
      <Header />
      <Alertsection />
      <Firstsection />
      <Secondsection />
      <Thirdsection />
      <Fourthsection />
      <Fifthsection />
      <Sixthsection />
      <Footer />
    
    </div>
    
  );
}

export default App;
