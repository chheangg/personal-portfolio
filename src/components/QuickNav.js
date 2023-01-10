  const QuickNavElement = ({text}) => (
  <li className="quick-nav-element">{text}</li>
)

const QuickNav = () => {
  const navList = ['🧑 About me', '🔨 Skills', '🚧 Portfolio', '📱 Contact', '💬 Blog']
  return (
    <div className='quick-nav-container'>
      <h3 className='quick-nav-title'>Outlines</h3>
      <ul className="quick-nav">
        {navList.map(nav => <QuickNavElement text={nav} key={nav} />)}
      </ul>
    </div>
  )
}

export default QuickNav;