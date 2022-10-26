import React from 'react'
import { useState } from 'react';
import CustomerTable from './components/CustomerTable'
// import ReactDOM from 'react-dom'
// import { v4 as uuidv4 } from 'uuid';
import './App.css';

// As I work with local storage I am using a framework to allocate an id for each customer, this will help in my delete function.
function App() {

  const customersInfo = [
    { id:1, name: 'Mayra Lav', rego: "SA456YU", phone: "0455223344", serviceDate: "02/09/2021" },
    { id:2, name: 'Diego Smith', rego: "SA328TU", phone: "0455554899", serviceDate: "10/03/2022" }
  ]

  // Using state with a previous information
  const [customers, setCustomers] = useState(customersInfo)

  return (
    <div className="container">
      <h1>DP Automotive services customers</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add customer</h2>
        </div>
        <div className="flex-large">
          <h2>Customers Information</h2>
          {/* To pass the customers information, I use props */}
          <CustomerTable customers={customers}/>
        </div>
      </div>
    </div>
  );
}

export default App;
