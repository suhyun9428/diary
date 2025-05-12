const Header = ({ title, leftChiild, rightChild }) => {
  return (
    <header>
      {leftChiild}
      <h1 className='text__title'>{title}</h1>
      {rightChild}
    </header>
  )
}
export default Header;