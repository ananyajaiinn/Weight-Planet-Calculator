import './App.css';
import Body from './Components/Body';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';


function App() {
  return (
    <div>
      <Navbar title = "Weight Calculator"/>
      <Body/>
      <TextForm/>
    </div>
  );
}

export default App;
