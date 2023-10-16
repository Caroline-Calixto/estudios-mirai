
const ButtonMedium = (props: { color: any; name: string }) => {

  const buttonStyles = {
    backgroundColor: props.color,
    color: 'white',
    paddingRight: '32px',
    paddingLeft: '32px',
    cursor: 'pointer',
    borderRadius: '5px',
    border: 'none',
    width: '167px',
    height: '58px',
    fontSize: '16px',
    fontWeight: '400'
};

return (
  <button style={buttonStyles}>
    {props.name}
  </button>
);
 }

export default ButtonMedium;
