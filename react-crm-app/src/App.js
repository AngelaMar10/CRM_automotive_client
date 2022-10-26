import React from 'react'
import CustomerTable from './components/CustomerTable'
import ReactDOM from 'react-dom'
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>DP Automotive services customers</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add customer</h2>
        </div>
        <div className="flex-large">
          <h2>Customers Information</h2>
          <CustomerTable />
        </div>
      </div>
    </div>
  );
}

export default App;
