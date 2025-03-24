import React, {useState} from "react"
import './App.css';
import Soundbar from "./Soundbar.jsx"

const apiKey = process.env.REACT_APP_JAMENDO_KEY;

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {

    setSearchInput(e.target.value);

  };

  const handleSearchClick = async (e) => {
    const url = `https://api.jamendo.com/v3.0/tracks/?client_id=${apiKey}&format=jsonpretty&limit=5&search=${encodeURIComponent(searchInput)}`;
    try{

      const response = await fetch(url);
      if(!response.ok){
        throw new Error(`API request failed with status ${response.status}`);
      };

      const data = await response.json();
      console.log(data.results);
      setSearchResults(data.results);
      

    }catch (err){
      console.log(err);
    }

  };


  return (
    <div className="App">
      <div id="searchDiv">
        <input id="searchBar" onChange={handleInputChange}></input>
        <button onClick={handleSearchClick}>Search</button>
      </div>
      
      <div id="searchResults">
        {searchResults.map((track) => (
          <div key={track.name + "|" + track.artist_id}>
            {track.name}
          </div>
        ))}
      </div>
      <Soundbar></Soundbar>
    </div>
  );
}

export default App;
