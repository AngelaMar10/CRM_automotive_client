import React from "react";

const CustomerTable = () => {
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
        <tr>
          <td>Customer name</td>
          <td>Rego</td>
          <td>Phone</td>
          <td>Date</td>
          <td>
            <button className="button muted-button">Edit</button>
            <button className="button muted-button">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default CustomerTable;