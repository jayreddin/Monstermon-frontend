
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getMonstermons } from '../services/api';

const MonstermonList = () => {
  const [monstermons, setMonstermons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMonstermons = async () => {
      try {
        const response = await getMonstermons();
        setMonstermons(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching monstermons:', error);
        setLoading(false);
      }
    };

    fetchMonstermons();
  }, []);

  if (loading) return Loading...;

  return (

      {monstermons.map((monstermon) => (

          {monstermon.name}
          Types: {monstermon.types.join(', ')}

      ))}

  );
};

export default MonstermonList;
