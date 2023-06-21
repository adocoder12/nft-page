import style from './style.module.css'
// eslint-disable-next-line react/prop-types
const SponsorItems = ({ logo, text }) => {
  return (
    <div className={style.sponsorItem}>
      <img className={style.sponsorItemLogo} src={logo} alt="Logo" />
      <span>{text}</span>
    </div>
  )
}

export default SponsorItems
