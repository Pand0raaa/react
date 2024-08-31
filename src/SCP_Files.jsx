import { Link } from 'react-router-dom';

function Scp_Files({ name, description, ScpLink }) {
    const buttonStyle = {
        display: 'inline-block',
        textDecoration: 'none',
        background: 'none',
        border: 'none',
        padding: '0',
        fontSize: '16px',
        color: '#007bff',
        cursor: 'pointer',
        transition: 'color 0.3s ease',
      };

  const buttonHoverStyle = {
    ...buttonStyle,
    color: '#0056b3', 
  };

  return (
    <div className="p-3 border rounded shadow mb-5">
      <h2>{name}</h2>
      <p>{description}</p>
      {ScpLink && (
        <p>
          <Link 
            to={ScpLink} 
            style={buttonStyle} 
            onMouseOver={(e) => e.currentTarget.style.color = buttonHoverStyle.color} 
            onMouseOut={(e) => e.currentTarget.style.color = buttonStyle.color}
          >
            View SCP
          </Link>
        </p>
      )}
    </div>
  );
}

export default Scp_Files;
