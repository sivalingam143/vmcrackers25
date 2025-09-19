import React from 'react';

const WhatsAppButton = ({ name, phoneNumber }) => {
  const handleClick = () => {
    const message = `Hi ${name}`;
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="whatsapp-icon" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <img src={require('../../assets/images/whatsappicon.webp')} className='img-fluid priceicn float-left' alt='special price' />
    </div>
  );
};

export default WhatsAppButton;
