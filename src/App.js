
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route} from 'react-router-dom';
import pocetna from './Components/pocetna';
import affiliate from './Components/affiliate';
import blogging from './Components/blogging';
import dropshipping from './Components/freelance';
import freelance from './Components/selling';

function App() {
  return (
    <div className="App">
      

      <Router>
        <Route exact path="/" component={pocetna}></Route>
        <Route path="/affiliate" component={affiliate}></Route>
        <Route path="/blogging" component={blogging}></Route>
        <Route path="/dropshipping" component={dropshipping}></Route>
        <Route path="/freelance" component={freelance}></Route>
      </Router>
    </div>
  );
}

export default App;
