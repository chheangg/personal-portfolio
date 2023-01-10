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
import Section from './components/Section';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Nav>
        <IconButton text='Home' href='/' />
        <IconButton src={menuIcon} label='Menu' href='/' />
      </Nav>
      <Main />
      <Section title='1. About me'>
        <p className='paragraph'>
          My journey starts in high school during the peak of the pandemic. At 
           the time, I was running a Minecraft server and at the time I had an
          interest in how servers and certain protocols communicates with each 
          other to form a working system. Eventually, I found out about The Odin Project
          Web development course which provided me not just full stack development skillsets
          but the ability to self-teach oneself.
        </p>
        <p className='paragraph'>
          After building a few projects to prove that I am well-versed enough with
          the MERN stack and other few tech stacks as well. I'm going to major in ITM 
          in AUPP to make new friends and fellows and also I'm looking forward to work in
          at my first company!  
        </p>
      </Section>
    </div>
  )
}

export default App;