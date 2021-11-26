import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchIrelandData } from '../../../store/actions/index';
import RightArrow from '../../../assets/icons/right-arrow-circle-icon.svg';

const IrelandData = ({ ireland }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchIrelandData());
  }, []);

  return (
    <div>
      <h2 className="country-name">Ireland Data</h2>
      <ol className="card">
        {ireland.map((data) => (
          <li key={data.id} className="card-items">
            <span className="title">{data.title}</span>
            <span className="sub-portion">
              <span className="date">{data.date}</span>
              <span>
                <img src={RightArrow} alt="right arrow" className="icon" />
              </span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default IrelandData;

IrelandData.propTypes = {
  ireland: PropTypes.arrayOf(PropTypes.string).isRequired,
};
