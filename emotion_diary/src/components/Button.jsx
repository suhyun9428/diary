import classNames from 'classnames';

const Button = ({ text, type, onClick }) => {
  return(<button type="button" className={classNames('button', {
    'button__default': type === 'DEFAULT',
    'button__positive': type === 'POSITIVE',
    'button__negative': type === 'NEGATIVE',
    'button__left': type === 'LEFT',
    'button__right': type === 'RIGHT',
    'button__add': type === 'CREATE',
    'button__confirm': type === 'CONFIRM',
    'button__cancel':type === 'CANCEL',
  })} onClick={onClick}>
    <span className={classNames('text', {'for-a11y' : (type === 'LEFT' || type === 'RIGHT')})}>{text}</span></button>)
}
export default Button;