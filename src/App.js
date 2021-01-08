import './App.css';
import Navbar from './components/navbar'
import Jumbotron from './components/jumbrotron'
import ReactDOM from 'react-dom';
import HorizontalLabelPositionBelowStepper from './components/progress-bar';

ReactDOM.render(<HorizontalLabelPositionBelowStepper />, document.querySelector('#root'));


 
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Jumbotron/>
      <HorizontalLabelPositionBelowStepper/>
      
    </div>
  );
}


export default App;
