import React, { useEffect, useRef } from 'react';
import profileImage from '../assets/picture.png'; // Add your photo to assets folder

const Header = () => {
    const headerRef = useRef(null);

    useEffect(() => {
        const header = headerRef.current;
        if (header) {
            setTimeout(() => {
                header.classList.add('animated');
            }, 500);
        }
    }, []);

    return (
        <header ref={headerRef}>
            <div className="header-content">
                <div className="profile-container">
                    <div className="profile-image-container">
                        <img src={profileImage} alt="Pem Tsering Gurung" className="profile-image" />
                    </div>
                    <div className="text-content">
                        <h1>Pem Tsering Gurung.</h1>
                        <p>Hello, I am Pem Tsering Gurung. I am currently a Junior at the College of Wooster majoring in Computer Science.</p>
                        <div className="social-links">
                            <a href="https://github.com/pemtseringgurung" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/pemgurung" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="mailto:your.email@example.com" className="social-icon">
                                <i className="fas fa-envelope"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <nav>
                    <a href="#experience">Experience</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
                <div className="scroll-indicator">
                    <span>Scroll Down</span>
                    <div className="scroll-arrow">↓</div>
                </div>
            </div>
        </header>
    );
};

export default Header;
