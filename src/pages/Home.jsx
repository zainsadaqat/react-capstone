import { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const uk = ['england-and-wales', 'northern-ireland', 'scotland', 'uk'];
  const [englandData, setEnglandData] = useState([]);
  const [irelandData, setIrelandData] = useState([]);
  const [scotlandData, setScotlandData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // const handleAPI = async () => {
  //   const response = await axios.get('https://www.gov.uk/bank-holidays.json');
  //   const data = await response.data;
  //   setEnglandData(data['england-and-wales'].events);
  //   setIrelandData(data['northern-ireland'].events);
  //   setScotlandData(data.scotland.events);
  // };

  const response = [...englandData, ...irelandData, ...scotlandData];
  console.log('Response: ', response);

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
            <li key={resp}>{resp}</li>
          ))}
      </ol>
    </div>
  );
};

export default Home;
