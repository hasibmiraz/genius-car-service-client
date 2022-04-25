import { useEffect, useState } from 'react';

const useServiceDetails = (serviceId) => {
  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`https://mysterious-plains-30043.herokuapp.com/service/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [serviceId]);
  return [service, setService];
};

export default useServiceDetails;
