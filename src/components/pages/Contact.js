import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import { capitalizeFirstLetter } from "../../utils/helpers";


// each contact will have a name email subject and message
export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  // const { name, email, message } = formState;

  // function to handle any errors on submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log("Form", formState);
    }
  };


  // function to validate email and check for any empty feilds on blur from field and stuff
  const handleChange = (e) => {
    const capitalFieldName = capitalizeFirstLetter(e.target.name);
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Please enter a valid email address so I can get in touch with you.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value) {
        setErrorMessage(capitalFieldName + ` is currently blank. Please fill out this field.`);
      } else {
        setErrorMessage("");
      }
    }
  };

  return (
    <section className="hero contact-section">
      <form action="#" className="contact-form mt-5" id="contact-form" onSubmit={handleSubmit}>

        <div class="form-group">
          <label htmlFor="name" for="exampleInputEmail1"></label>
          <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" required onBlur={handleChange} />
        </div>

        <div class="form-group">
          <label htmlFor="email" for="exampleInputEmail1"></label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required onBlur={handleChange} />
        </div>

        <div class="form-group">
          <label htmlFor="Subject" for="exampleInputEmail1"></label>
          <input type="subject" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="subject" required onBlur={handleChange} />
        </div>

        <div class="form-group">
          <label htmlFor="message" for="exampleFormControlTextarea1"></label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Lets work together!" required onBlur={handleChange}></textarea>
        </div>

        <button type="submit" class="btn btn-primary margin mt-3">Send</button>

        <span class="mt-3">
          <h2> {errorMessage} </h2>
        </span>

      </form>
    </section>
  );
};
