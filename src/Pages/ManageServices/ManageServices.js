import React from 'react';
import useServices from '../../hooks/userServices';

const ManageServices = () => {
  const [services, setServices] = useServices();

  const handleDelete = async (id) => {
    const url = `http://localhost:5000/service/${id}`;
    const proceed = window.confirm('Are you sure you want to delte?');
    if (proceed) {
      await fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        });
    }
  };
  return (
    <div className="w-50 mx-auto">
      <h2>Manage Services</h2>
      {services.map((service) => (
        <div key={service._id}>
          <h5>
            {service.name}{' '}
            <button onClick={() => handleDelete(service._id)}>X</button>
          </h5>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
