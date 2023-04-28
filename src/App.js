import './assets/fontawesome/css/all.css';
import logo from './logo.svg';
import profil from './assets/profil.png'
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='bloc'>
        <div className='sidebar'>
          <Sidebar/>
        </div>
        <div className='border'>
          <div className='border-b flex'>
            <div>HOME</div>
            <div><i className='far fa-star'></i></div>
          </div>
          <div>
            <img className='profile' src={profil}/>
          </div>
        </div>
        <div className='recherche'>RECHERCHE</div>
    </div>
  );
}

export default App;
