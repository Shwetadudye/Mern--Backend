export const Buttons = ({ name, style, type }) => {
  return (
    <button name={name} id={name} style={style} type={type}>
      {name}
    </button>
  );
};