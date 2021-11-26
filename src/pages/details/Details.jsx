import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  fetchEnglandData,
  fetchIrelandData,
  fetchScotlandData,
} from '../../store/actions';
import './Details.css';
import EnglandData from '../../components/data/england/EnglandData';
import IrelandData from '../../components/data/ireland/IrelandData';
import ScotlandData from '../../components/data/scotland/ScotlandData';

const Details = ({ setTotal, england, ireland, scotland }) => {
  const dispatch = useDispatch();
  const { country } = useParams();
  useEffect(() => {
    setTotal(england.length);
    setTotal(ireland.length);
    setTotal(scotland.length);
    setTotal(england.length + ireland.length + scotland.length);
    dispatch(fetchEnglandData());
    dispatch(fetchIrelandData());
    dispatch(fetchScotlandData());
  }, []);

  return (
    <div className="details-container">
      {country === ':england-and-wales' && <EnglandData england={england} />}
      {country === ':northern-ireland' && <IrelandData ireland={ireland} />}
      {country === ':scotland' && <ScotlandData scotland={scotland} />}
      {country === ':uk' && (
        <>
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
  setTotal: PropTypes.func.isRequired,
};
