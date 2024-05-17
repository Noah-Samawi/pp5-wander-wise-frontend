import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export function useDataFetcher(type) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(type);
        setData(response.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [type]);

  return { data, loading, error };
}

export function Data({ type }) {
  const { data, loading, error } = useDataFetcher(type);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error: Unable to fetch data. Please try again later.
        {/* You can also provide more details, e.g., error.message */}
      </div>
    );
  }

  return <div>{JSON.stringify(data)}</div>;
}

Data.propTypes = {
  type: PropTypes.string.isRequired,
};
