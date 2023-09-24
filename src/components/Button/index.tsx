
const ButtonPrimary = (props: { color: any; name: string }) => {

  const buttonStyles = {
    backgroundColor: props.color,
    color: 'white',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '10px',
    border: 'none',
    width: '119px',
    height: '50px'
};

return (
  <button style={buttonStyles}>
    {props.name}
  </button>
);
 }

export default ButtonPrimary;
