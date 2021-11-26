import React from 'react';
import { useNavigate } from 'react-router-dom';
import Settings from '../../assets/icons/settings-svg-icon.svg';
import Voice from '../../assets/icons/voice-icon.svg';
import BackArrow from '../../assets/icons/back-arrow-icon.svg';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <section>
      <div className="flex-container">
        <button type="button" onClick={() => navigate('/')} className="btn">
          <img src={BackArrow} alt="back arrow icon" className="icon" />
        </button>
        <h1 className="heading">Bank Holidays in UK</h1>
        <div className="left-icons">
          <img src={Voice} alt="voice icon" className="icon" />
          <img src={Settings} alt="settings icon" className="icon" />
        </div>
      </div>
    </section>
  );
};
export default Header;
