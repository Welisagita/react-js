
//parent component
import React, {useState} from 'react'
import Introduction from './components/introduction';
import Profile from './components/profile';

function App() {
  const [mobilSaya, setMobilSaya] = useState(1)
  

  if (mobilSaya <= 0){
    alert('Stop!');
  }

  return (
    <>
      <h1>Saya memiliki: {mobilSaya} mobil</h1>
      <button onClick={() => setMobilSaya((prev) => prev + 1)}>Tambah Mobil</button>
      <button onClick={() => setMobilSaya((prev) => prev - 1)}>Kurangi Mobil</button>



      <Profile/>
      <Introduction name = "Weli"/>
      <Introduction name = "Selly"/>      
    </>
  );
}

export default App;
