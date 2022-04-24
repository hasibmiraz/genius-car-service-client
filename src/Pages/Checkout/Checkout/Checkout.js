import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetails from '../../../hooks/useServiceDetails';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetails(serviceId);
  const [user] = useAuthState(auth);
  return (
    <div className="w-50 mx-auto">
      <h2>Please order: {service.name}</h2>
      <form>
        <input
          className="w-100 mb-2"
          type="text"
          name="name"
          defaultValue={user.displayName}
          placeholder="Name"
          required
          readOnly
          disabled
        />
        <br />
        <input
          className="w-100 mb-2"
          type="email"
          name="email"
          defaultValue={user.email}
          placeholder="Email"
          required
          readOnly
          disabled
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="service"
          defaultValue={service.name}
          placeholder="Service"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="address"
          placeholder="Address"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="number"
          name="number"
          placeholder="Phone Number"
          required
        />
        <br />
        <input
          className="w-50 mb-2 btn btn-primary"
          type="submit"
          value="Place Order"
        />
      </form>
    </div>
  );
};

export default Checkout;
