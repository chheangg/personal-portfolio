//Styles
import 'normalize.css';
import './styles/styles.scss';
import './styles/nav.scss';

// Assets
import menuIcon from './assets/menu.svg'

// Components
import Nav from "./components/Nav";
import IconButton from './components/IconButton';

const App = () => {
  return (
    <div>
      <Nav>
        <IconButton text='Home' href='/' />
        <IconButton src={menuIcon} label='Menu' href='/' />
      </Nav>
      <main>
        <p>Hello there, I'm</p>
        <h1>
          Chheang
        </h1>
        <p>and, I'm:</p>
        <ul>  
          <li>a prospect for AUPP</li>
          <li>a debate enthusiast</li>
          <li>a full-stack developer</li>
        </ul>
        <button>Not clear?</button>
      </main>
    </div>
  )
}

export default App;