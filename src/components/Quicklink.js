const links = [
  {
    text: 'Github',
    href: 'https://github.com/chheangg',
    img: <i className="devicon-github-original colored"></i>
  },
  { 
    text: 'Facebook',
    href: 'https://www.facebook.com/koraeworae/',
    img: <i className="devicon-facebook-plain colored"></i>
  },
  {
    text: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ly-eang-chheang-b73037240/',
    img: <i className="devicon-linkedin-plain colored"></i>
  }
]

const QuickLinkElement = ({text, img, href}) => (
  <li className="quick-link-el">
    <a href={href}>
      {img}
      <span>{text}</span>
    </a>
  </li>
)

const QuickLink = () => {
  return (
    <div className='quick-link-container  '>
      <ul className='quick-link'>
        {links.map(link => <QuickLinkElement key={link.text} {...link} />)}
      </ul>
    </div>

  )
}

export default QuickLink