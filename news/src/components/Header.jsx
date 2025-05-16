import Weather from "./Weather";

const Header = () => {
  return(
    <header>
      <Weather />
      <h1 className="text__title">SUN NEWS-</h1>
      <button type="button" className="button__search">search</button>
    </header>
  )
};

export default Header;