import "../App.css";

import useForm from "./utilities/useForm";

const NewClientForm = () => {
  const [formValues, handleChange, clearForm] = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `submitted create new client form: first: ${formValues.firstName} last: ${formValues.lastName} and contact : ${formValues.contact}`
    );
    // here we want to construct an object from the form data that is now on local state
    // and use that object in a post request to back end to add new client to the database
    // then clear form
    clearForm();
  };

  return (
    <div className="new-client-div">
      <h2>Create New Client</h2>
      <form onSubmit={handleSubmit} className="new-client-form">
        <label></label>
        <input
          name="firstName"
          value={formValues.firstName || ""}
          onChange={handleChange}
          placeholder="First Name"
        ></input>
        <label></label>
        <input
          name="lastName"
          value={formValues.lastName || ""}
          onChange={handleChange}
          placeholder="Last Name"
        ></input>
        <label></label>
        <input
          name="contact"
          value={formValues.contact || ""}
          onChange={handleChange}
          placeholder="Contact Number"
        ></input>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default NewClientForm;
