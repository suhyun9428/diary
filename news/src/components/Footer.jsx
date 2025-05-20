import { useNavigate } from "react-router-dom";
const Footer = () => {
  const nav = useNavigate();

  return(
    <footer>
      <button type='button' className="button button__search" onClick={() => nav('/search')}>
        <span className="for-a11y">seacrh</span>
      </button>
      <button type='button' className="button button__home" onClick={() => nav('/')}>
        <span className="for-a11y">home</span>
      </button>
      <button type='button' className="button button__filter" onClick={() => nav('/filter')}>
        <span className="for-a11y">filter</span>
      </button>
      <button type='button' className="button button__location" onClick={() => nav('/location')}>
        <span className="for-a11y">location</span>
      </button>
    </footer>
  )
}
export default Footer;