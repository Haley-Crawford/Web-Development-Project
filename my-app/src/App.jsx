//import logo from './logo.svg'
import SignUp from './components/sign up.jsx'
import LogIn from './components/Login.jsx'
import SongCard from './components/Song Card.jsx'
import Carousel from './components/song carousel.jsx'
import ArtistInfo from './components/artist info.jsx'
import ArtistPage from './components/artist page.jsx'
import SongsComponent from './components/artist page - songs.jsx'
import NavBar from './components/NavBar.jsx'
import TopNavBar from './components/TopNavBar.jsx'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <div className="main-content">
        <TopNavBar />
        <div className="content-area">
        <ArtistPage />
        </div>
      </div>
    </div>
  )
}

export default App;
