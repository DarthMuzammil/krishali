import React from 'react';
import ContactButton from './ContactButton';

const ActivityCard = ({ activityName, buildingName, timing, prices }) => {
  const cardStyle = {
    width: '100%',
    maxWidth: '400px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#ffffff',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transform: 'translateY(0)',
  };

  const hoverStyle = {
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
    transform: 'translateY(-5px)',
  };

  const headerStyle = {
    padding: '16px',
    borderBottom: '1px solid #e0e0e0',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: 0,
  };

  const contentStyle = {
    padding: '16px',
  };

  const infoStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '12px',
  };

  const iconStyle = {
    marginRight: '8px',
    color: '#666',
  };

  const priceListStyle = {
    listStyleType: 'disc',
    paddingLeft: '24px',
    margin: '8px 0',
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      style={{...cardStyle, ...(isHovered ? hoverStyle : {})}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={headerStyle}>
        <h2 style={titleStyle}>{activityName}</h2>
      </div>
      <div className='p-1 flex flex-col'>
        <div style={infoStyle}>
          <span style={iconStyle}>🏢</span>
          <span>{buildingName}</span>
        </div>
        <div style={infoStyle}>
          <span style={iconStyle}>🗓️</span>
          <span>{timing}</span>
        </div>
        <div>
          <div style={infoStyle}>
            <span style={iconStyle}>💰</span>
            <span style={{ fontWeight: 'bold' }}>Prices:</span>
          </div>
          <ul style={priceListStyle}>
            {prices.map((price, index) => (
              <li key={index}>
                {price.classes} {price.classes === 1 ? 'Class' : 'Classes'}: {price.price}AED
              </li>
            ))}
          </ul>
        </div>
        <ContactButton>Contact</ContactButton>
      </div>
    </div>
  );
};

export default ActivityCard;


