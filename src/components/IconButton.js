import Icon from "./Icon";

const IconButton = ({text, src, label, href}) => {
  if (src) {
    return (
      <a className='icon-button' aria-label={label} href={href}>
        <Icon src={src} />
      </a>
    )
  }

  return (
    <a className='icon-button' href={href}>
      {text}
    </a>
  )
}

export default IconButton;