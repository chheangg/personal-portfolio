//Styles
import './styles/_variables.scss';
import 'normalize.css';
import './styles/index.scss';
import './styles/nav.scss';
import './styles/main.scss'
// Assets
import menuIcon from './assets/menu.svg'

// Components
import Nav from "./components/Nav";
import IconButton from './components/IconButton';
import Main from './components/Main';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Nav>
        <IconButton text='Home' href='/' />
        <IconButton src={menuIcon} label='Menu' href='/' />
      </Nav>
      <Main />
    </div>
  )
}

export default App;