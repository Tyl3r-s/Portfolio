import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import { capitalizeFirstLetter} from "../../utils/helpers";


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
      <div>
        <h2>
          Contact Me
        </h2>
        <form
          action="#"
          className="space-y-8"
          id="contact-form"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="Name"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="enter name"
              required
              onBlur={handleChange}
            ></input>
          </div>
          <div>
            <label
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="youremail@email.com"
              required
              onBlur={handleChange}
            ></input>
          </div>
          <div>
            <label
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              required
              onBlur={handleChange}
            ></input>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Let's work together!"
              required
              onBlur={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
          >
            Send
          </button> <span>
          <h2>
          {errorMessage}
        </h2>
        </span>
        </form>
      </div>
    </section>
  );
};
