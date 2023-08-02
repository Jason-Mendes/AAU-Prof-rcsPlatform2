
import React, { useState, useEffect } from 'react';

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // Fetch customers from the API
    fetch('api/Customers')
      .then(response => response.json())
      .then(data => setCustomers(data));
  }, []);

  return (
    <div>
      <h1>Customers</h1>
      <ul>
        {customers.map(customer => (
          <li key={customer.id}>{customer.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Customers;
