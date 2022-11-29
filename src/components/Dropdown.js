import react, { useState, useEffect, useRef } from 'react';
import { FaHome } from 'react-icons/fa';
import { RiContactsLine } from 'react-icons/ri';
import { GrProjects } from 'react-icons/gr';
import { GiSkills } from 'react-icons/gi';
import { BiMessageAltDetail } from 'react-icons/bi';

import workResume from '../assets/resume/tylerscottresume.pdf';

function Dropdown({ currentPage, handlePageChange }) {

    const [open, setOpen] = useState(false);

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        }

    });

    return (
        <div className="Dropdown">
            <div className='menu-container' ref={menuRef}>
                <div className={`menu-trigger ${open ? 'active' : 'inactive'}`} onClick={() => { setOpen(!open) }}>
                    <h3>
                        Menu
                    </h3>
                </div>
                <div className={`dropdownMenu ${open ? 'active' : 'inactive'}`}>
                    <ul>
                        <li>
                            <a
                                href="#home"
                                onClick={() => handlePageChange('Home')}

                                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                            >
                                <FaHome /> Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                onClick={() => handlePageChange('About')}

                                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                            >
                                <RiContactsLine /> About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#Work"
                                onClick={() => handlePageChange('Work')}

                                className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
                            >
                                <GrProjects /> Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#resume"

                                onClick={() => handlePageChange('Skills')}
                                className={currentPage === 'Skills' ? 'nav-link active' : 'nav-link'}
                            >
                                <GiSkills /> Skills
                            </a>
                        </li>
                        <li className="">
                            <a
                                href="#contact"

                                onClick={() => handlePageChange('Contact')}
                                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                            >
                                <BiMessageAltDetail /> Contact
                            </a>
                        </li>
                        <h5>Resume</h5>
                        <a className="dropdownView" href='https://resume.creddle.io/resume/9gs3poo1p3v' target='_blank' download> view </a>
                        <br />
                        <a className="dropdownDownload" href={workResume} download> download </a>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Dropdown;