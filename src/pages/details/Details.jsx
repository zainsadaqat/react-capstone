import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import './Details.css';
import EnglandData from '../../components/data/england/EnglandData';
import IrelandData from '../../components/data/ireland/IrelandData';
import ScotlandData from '../../components/data/scotland/ScotlandData';

const Details = ({ england, ireland, scotland }) => {
  const { country } = useParams();

  return (
    <div className="details-container">
      {country === ':england-and-wales' && <EnglandData england={england} />}
      {country === ':northern-ireland' && <IrelandData ireland={ireland} />}
      {country === ':scotland' && <ScotlandData scotland={scotland} />}
      {country === ':uk' && (
        <>
          <h2 className="country-name">UK</h2>
          <EnglandData england={england} />
          <IrelandData ireland={ireland} />
          <ScotlandData scotland={scotland} />
        </>
      )}
    </div>
  );
};

export default Details;

Details.propTypes = {
  england: PropTypes.arrayOf(PropTypes.object).isRequired,
  ireland: PropTypes.arrayOf(PropTypes.object).isRequired,
  scotland: PropTypes.arrayOf(PropTypes.object).isRequired,
};
