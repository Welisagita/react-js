
import './App.css';
import Introduction from './components/introduction';
import Profile from './components/profile';

function App() {
  return (
    <div>
      <h1>Learn React From the Scratch</h1>
      <p>Belajar react dari awal</p>

     <Profile/>

      <Introduction name = "Weli"/>
      <Introduction name = "Selly"/>      
    </div>
  );
}

export default App;
