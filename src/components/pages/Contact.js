import React, { useState } from "react";


export default function Contact() {
  return (
    <div className="contactContainer hero">
      <div class="container">
        <h3>Don't hesitate to contact me if you need anything, or if you'd like to work together!</h3>
        <form target="_blank" action="https://formsubmit.co/tylerscottdev@gmail.com" method="POST">
          <div class="form-group">
            <div class="form-row">
              <div class="col">
                <input type="text" name="name" className="form-control" placeholder="Your Name" required />
              </div>
              <div class="col">
                <input type="email" name="email" className="form-control" placeholder="Your Email" required />
              </div>
            </div>
          </div>
          <div class="form-group">
            <textarea placeholder="Your Message" className="form-control" name="message" rows="10" required></textarea>
          </div>
          <button type="submit" className="cardBtn contactButton">send</button>
        </form>
      </div>
    </div>
  )
}
