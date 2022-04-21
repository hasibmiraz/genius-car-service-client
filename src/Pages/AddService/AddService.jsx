import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const url = 'http://localhost:5000/service';
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));

    console.log(data);
  };
  return (
    <div className="w-50 mx-auto">
      <h2>please add a service</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-3 p-1 rounded"
          placeholder="Service Name"
          type="text"
          {...register('name', { required: true, maxLength: 20 })}
        />
        <textarea
          className="mb-3 p-1 rounded"
          placeholder="Service Description"
          type="text"
          {...register('description')}
        />
        <input
          className="mb-3 p-1 rounded"
          placeholder="Photo URL"
          type="text"
          {...register('img')}
        />
        <input
          className="mb-3 p-1 rounded"
          placeholder="Service Price"
          type="number"
          {...register('price')}
        />
        <input type="submit" value="Add Service" />
      </form>
    </div>
  );
};

export default AddService;
