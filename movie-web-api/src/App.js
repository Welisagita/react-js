
import './App.css';
import {getMovieList, searchMovie} from "./api";

const App = () => {
  useEffect(() => {
    getMovieList()
  }, [])

  const search = (q) => {
    console.log({q});
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>WELI MOVIE MANIA</h1>
        <input 
        placeholder="Cari film kesayangan.." 
        className="Movie-search"
        onChange= {({target}) => search(target.value)} 
        />

        <div className="Movie-container">
          <div className="Movie-wrapper">
              <div className="Movie-title">CONTOH PERTAMA</div>
                <img className="Movie-img" />
              <div className="Movie-date">11/12/2023</div>
              <div className="Movie-rate">8</div>
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;