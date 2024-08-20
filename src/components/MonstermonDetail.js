
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMonstermon } from '../services/api';

const MonstermonDetail = () => {
  const { id } = useParams();
  const [monstermon, setMonstermon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMonstermon = async () => {
      try {
        const response = await getMonstermon(id);
        setMonstermon(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching monstermon:', error);
        setLoading(false);
      }
    };

    fetchMonstermon();
  }, [id]);

  if (loading) return Loading...;
  if (!monstermon) return Monstermon not found;

  return (

      {monstermon.name}
      Types: {monstermon.types.join(', ')}
      Height: {monstermon.height}
      Weight: {monstermon.weight}
      Description: {monstermon.description}

      Stats

        {Object.entries(monstermon.stats).map(([stat, value]) => (
          {stat}: {value}
        ))}


      Abilities

        {monstermon.abilities.map((ability) => (
          {ability.name}: {ability.description}
        ))}


  );
};

export default MonstermonDetail;
