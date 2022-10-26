import React from "react";

const AddCustomer = (props) => {
  return (
    <form action="">
      <label>Name</label>
      <input type="text" name="name" />
      <label>Car registration</label>
      <input type="text" name="rego" />
      <label>Phone</label>
      <input type="text" name="phone" />
      <label>Service Date</label>
      <input type="text" name="serviceDate" />
      <button>Add Customer</button>
    </form>
  )
}

export default AddCustomer
