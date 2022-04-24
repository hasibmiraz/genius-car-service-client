import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetails from '../../../hooks/useServiceDetails';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetails(serviceId);
  const [user] = useAuthState(auth);

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    const order = {
      service: service.name,
      serviceId,
      address: e.target.address.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
    };
    await axios.post('http://localhost:5000/order', order).then((res) => {
      const { _id } = res.data;
      if (_id) {
        toast('Order placed successfullly!');
        e.target.reset();
      }
    });
  };

  return (
    <div className="w-50 mx-auto">
      <h2>Please order: {service.name}</h2>
      <form onSubmit={handlePlaceOrder}>
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
          name="phone"
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
      <ToastContainer />
    </div>
  );
};

export default Checkout;
