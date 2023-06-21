import style from './style.module.css'

const LogoWithText = (props) => {
  // eslint-disable-next-line react/prop-types
  const { imagen, title, textPrimary, TextSecondary } = props
  return (
    <div className={style.containerLogoText}>
      <img
        className={style.logoWithTextImage}
        src={imagen}
        alt="Etherium Logo"
      />
      <h2>{title}</h2>
      <p>{textPrimary}</p>
      <p>{TextSecondary}</p>
    </div>
  )
}

export default LogoWithText
