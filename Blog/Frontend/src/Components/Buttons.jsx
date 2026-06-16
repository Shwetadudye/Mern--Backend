export const Buttons = ({ name, style, type ,onClick}) => {
  return (
    <button name={name} id={name} style={style} type={type} onClick={onClick}>
      {name}
    </button>
  );
};