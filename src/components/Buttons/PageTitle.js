import React from 'react';
import { Close } from './Buttons';
import { FaTimes } from "react-icons/fa";
import './pagetitle.css';

const PageTitle = ({ title, onClick, address, phone }) => {
  return (
    <div className='d-flex flex-column p-3 title-bg'>
      {/* Title */}
      <div className='regular text-black mb-0.5'>
        {title}
      </div>

      {/* Address */}
      <div className='regular text-black mb-0.5'>
        {address}
      </div>

      {/* Phone Number */}
      {phone && (
      <div className='regular text-black mb-0.5'>
        Phone No: {phone}
      </div>
      )}

      {/* Close Button */}
      <div className='align-self-end'>
        <Close label={<FaTimes />} onClick={onClick} />
      </div>
    </div>
  );
}

export default PageTitle;
