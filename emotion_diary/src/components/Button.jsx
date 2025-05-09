import "./Button.css"
const Button = ({text, type, onClick}) => {
    return(<button type="button" className={`button 
        ${type === "DEFAULT" ? 'button__default':''}
        ${type === 'POSITIVE' ? 'button__positive':''}
        ${type === 'NEGATIVE' ? 'button__negative':''}
        ${type === "LEFT" ? "button__left":''}
        ${type === "RIGHT" ? "button__right":''}
        ${type === "CREATE" ? "button__add":''}
        `} onClick={onClick}>{text}</button>)
}
export default Button;
