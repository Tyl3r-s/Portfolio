import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="footerClass">
            <div class="contact-section">
                <a href="mailto:tylerscottdev@gmail.com"><span><FaEnvelope /></span> Email</a>
                <a href="https://github.com/Tyl3r-s"><span><FaGithub /></span> Github</a>
                <a href="https://www.linkedin.com/in/tylerscottdev"><span><FaLinkedin /></span> LinkedIn</a>
                <div className="copyright">
                    <p>copyright 2022 &copy; Tyler Scott</p>
                </div>
            </div>

        </footer>
    )
}