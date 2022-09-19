import React from 'react';
import ReactDOM from 'react-dom'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="footerClass">

            <div class="contact-section">
                <p>copyright 2022 &copy; Tyler Scott</p>
                <a href="mailto:Tyl3r.s@outlook.com"> <FaEnvelope /> </a>
                <a href="https://github.com/Tyl3r-s"> <FaGithub /> </a>
                <a href="https://www.linkedin.com/in/tyler-scott-a55010238/"> <FaLinkedin /> </a>
            </div>
        </footer>
    )
}