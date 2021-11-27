import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import './Details.css';
import EnglandData from '../../components/data/england/EnglandData';
import IrelandData from '../../components/data/ireland/IrelandData';
import ScotlandData from '../../components/data/scotland/ScotlandData';

const Details = () => {
  const { country } = useParams();

  return (
    <div>
      {country === ':england-and-wales' && <EnglandData />}
      {country === ':northern-ireland' && <IrelandData />}
      {country === ':scotland' && <ScotlandData />}
      {country === ':uk' && (
        <>
          <h2 className="country-name">UK</h2>
          <EnglandData />
          <IrelandData />
          <ScotlandData />
        </>
      )}
    </div>
  );
};

export default Details;
