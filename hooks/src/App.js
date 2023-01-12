
//parent component
import React, {useState, useEffect} from 'react'
import Introduction from './components/introduction';
import Profile from './components/profile';

function App() {
  const [mobilSaya, setMobilSaya] = useState(1)
  const [warnaMobil, setWarnaMobil] = useState("")

  useEffect (() => {

    if(mobilSaya > 1){
    setWarnaMobil("Merah")
    } else if (mobilSaya < 1) {
      setWarnaMobil("Biru")
    }
  }, [mobilSaya]);
  

  return (
    <>
      <h5>Warna Mobil: {warnaMobil} </h5>
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
