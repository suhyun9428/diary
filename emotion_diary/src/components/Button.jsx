import classNames from 'classnames';

const Button = ({ text, type, onClick }) => {
  return(<button type="button" className={classNames('button', {
    'button__left': type === 'LEFT',
    'button__right': type === 'RIGHT',
    'button__add': type === 'CREATE',
    'button__confirm': type === 'CONFIRM',
    'button__cancel':type === 'CANCEL',
    'button__edit':type === 'EDIT',
  })} onClick={onClick}>
    <span className={classNames('text', {'for-a11y' : (type === 'LEFT' || type === 'RIGHT' || type === 'CANCEL' || type === 'EDIT')})}>{text}</span></button>)
}
export default Button;