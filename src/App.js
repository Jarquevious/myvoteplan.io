import './App.css';
import Navbar from './components/navbar/navbar'
import Jumbotron from './components/jumbotron/jumbrotron'
import ReactDOM from 'react-dom';
import HorizontalLabelPositionBelowStepper from './components/progress-bar/progress-bar';
import ContainedButtons from './components/create_plan_button/create_plan_button';

ReactDOM.render(<HorizontalLabelPositionBelowStepper />, document.querySelector('#root'));


 
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Jumbotron/>
      <HorizontalLabelPositionBelowStepper/>
      <ContainedButtons />
      
    </div>
  );
}


export default App;
