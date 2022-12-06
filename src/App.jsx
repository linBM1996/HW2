import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import CCMyKitchen from './Class Comps/CCMyKitchen';
import EHeader from './Elements/EHeader';


function App() {
  return (
    <div className="App">
      {EHeader}
      <br/>
      <CCMyKitchen/>
    </div>
  );
}

export default App;
