import React, { useState } from "react";
import Dropdown from '../Dropdown';
import Footer from '../Footer';


export default function Contact() {
  return (
    <div>
      <Dropdown />
      <div className="contactContainer hero">
        <div class="container">
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
      <Footer />
    </div>
  )
}
