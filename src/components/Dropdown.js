import React, { useState, useEffect, useRef } from 'react';
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
                                href="/ts-portfolio/#/"
                                onClick={() => handlePageChange('Home')}

                                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                            >
                                <FaHome /> Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/ts-portfolio/#/About"
                                onClick={() => handlePageChange('About')}

                                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                            >
                                <RiContactsLine /> About
                            </a>
                        </li>
                        <li>
                            <a
                                href="/ts-portfolio/#/Work"
                                onClick={() => handlePageChange('Work')}

                                className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
                            >
                                <GrProjects /> Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="/ts-portfolio/#/Skills"

                                onClick={() => handlePageChange('Skills')}
                                className={currentPage === 'Skills' ? 'nav-link active' : 'nav-link'}
                            >
                                <GiSkills /> Skills
                            </a>
                        </li>
                        <li className="">
                            <a
                                href="/ts-portfolio/#/Contact"

                                onClick={() => handlePageChange('Contact')}
                                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                            >
                                <BiMessageAltDetail /> Contact
                            </a>
                        </li>
                        <a className="dropdownDownload" href={workResume} download> Resume </a>
                        <br/>
                        <a className="dropdownView" href='https://www.linkedin.com/in/tylerscottdev/' target='_blank' download> LinkedIn </a>
                        <br/>
                        <a className="dropdownView" href='https://github.com/Tyl3r-s' target='_blank' download> GitHub </a>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Dropdown;