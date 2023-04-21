import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="footerClass">
            <div class="contact-section">
                <a href="mailto:tylerscottdev@gmail.com" target="_blank"><span><FaEnvelope /></span> Email</a>
                <a href="https://github.com/Tyl3r-s" target="_blank"><span><FaGithub /></span> Github</a>
                <a href="https://www.linkedin.com/in/tylerscottdev" target="_blank"><span><FaLinkedin /></span> LinkedIn</a>
                <div className="copyright">
                    <p>2022 &copy; Tyler Scott</p>
                </div>
            </div>

        </footer>
    )
}