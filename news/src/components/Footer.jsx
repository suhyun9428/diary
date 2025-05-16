import { useNavigate } from "react-router-dom";
const Footer = () => {
  const nav = useNavigate();

  return(
    <footer>
      <button type='button' className="button button__search" onClick={() => nav('/search')}>seacrh</button>
      <button type='button' className="button button__home" onClick={() => nav('/')}>home</button>
      <button type='button' className="button button__filter" onClick={() => nav('/filter')}>filter</button>
      <button type='button' className="button button__location" onClick={() => nav('/location')}>location</button>
    </footer>
  )
}
export default Footer;