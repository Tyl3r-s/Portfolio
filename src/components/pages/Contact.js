import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-content">
        <div className="flex-center ">
          <h2 className="section-title secondary-border">Contact</h2>
        </div>

        <p>Got a question for me?</p>

        <div className="contact-form flex-center">
          <form>
            <input type="text" id="contact-name" placeholder="Name"/>
              <input type="email" id="contact-email" placeholder="Email"/>
                <textarea id="contact-message" placeholder="Message"></textarea>
                <button type="submit">Submit</button>
              </form>
            </div>
        </div>
    </section>
  );
}
