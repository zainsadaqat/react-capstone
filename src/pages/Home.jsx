import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchEnglandData } from '../store/actions';

const Home = () => {
  const uk = ['england-and-wales', 'northern-ireland', 'scotland', 'uk'];

  const [searchTerm, setSearchTerm] = useState('');

  // const response = [...englandData, ...irelandData, ...scotlandData];
  // console.log('Response: ', response);

  return (
    <div>
      <input
        type="text"
        placeholder="Search ..."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <hr />
      <ol>
        {uk
          .filter((value) => {
            if (value.toLowerCase().includes(searchTerm.toLowerCase())) {
              return value;
            }
          })
          .map((resp) => (
            <li key={resp}>
              <NavLink exact to="/details">
                {resp}
              </NavLink>
            </li>
          ))}
      </ol>
    </div>
  );
};

export default Home;
