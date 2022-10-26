import React from "react";

const CustomerTable = (props) => {

  console.log(props.customers)
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Car registration</th>
          <th>Phone number</th>
          <th>Date of Service</th>
        </tr>
      </thead>
      <tbody>
        {
          props.customers.map(customer => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.rego}</td>
              <td>{customer.phone}</td>
              <td>{customer.serviceDate}</td>
              <td>
                <button className="button muted-button">Edit</button>
                <button className="button muted-button">Delete</button>
              </td>
            </tr>

          ))
        }
        
      </tbody>
    </table>
  )
}

export default CustomerTable;