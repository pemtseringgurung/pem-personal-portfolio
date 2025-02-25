import React from 'react';
import woosterLogo from '../assets/cow.png'; // Import your company logos

const Experience = () => {
    return (
        <section id="experience">
            <h2>Experience</h2>
            <ul>
                <li>
                    <div className="date">
                        <div>11/2023</div>
                        <div>-</div>
                        <div>10/2024</div>
                    </div>
                    <div className="content">
                        <img src={woosterLogo} alt="wooster-logo" className="company-logo" />
                        <div className="job-title">Digital Archive Research Assistant @ The College of Wooster</div>
                        <div className="company-location">
                            <span>Full-Stack Development, Digital Archiving, and Automation</span>
                            <span>Wooster, OH</span>
                        </div>
                        <p>
                        I maintained and enhanced the full-stack website for the Anglophone Chile project, preserving historical records of 19th-century English-speaking settlers in Chile. I implemented over 20 front-end optimizations, including responsive image scaling and layout refinements, reducing page load time by 15% and improving mobile usability by 20%. I developed an automated email notification system using Django, Celery, Redis, and SMTP, delivering 500+ notifications monthly and increasing user engagement by 30%. Additionally, I streamlined the website’s architecture and front-end components using React.js and Django REST Framework (DRF), improving usability scores by 25% based on accessibility testing and user feedback.
                        </p>
                    </div>
                </li>
                <li>
                <div className="date">
                        <div>01/2024</div>
                        <div>-</div>
                        <div>05/2025</div>
                    </div>
                    <div className="content">
                        <img src={woosterLogo} alt="wooster-logo" className="company-logo" />
                        <div className="job-title">Mathematics and Computational Science Research Assistant @ The College of Wooster</div>
                        <div className="company-location">
                            <span>Machine Learning, Computational Modeling, and Data Analysis</span>
                            <span>Wooster, OH</span>
                        </div>
                        <p>
                        I developed deep learning models using TensorFlow and SciPy to analyze over 5,000 experimental samples, improving pattern identification by 12% and reducing analysis time by 20%. I built a multi-stage data pipeline integrating Scikit-Learn clustering with Matplotlib and Seaborn to enhance bacterial resistance pattern analysis, achieving 15% better accuracy. Additionally, I designed differential equation models using SciPy numerical solvers to simulate 10,000+ timesteps of experimental data, leveraging SQLite and Jupyter Notebooks for efficient data storage and visualization. I also created Mesa agent-based models with PyTorch regression and MLflow tracking to predict experimental outcomes with 10% higher accuracy across 20 different scenarios.
                        </p>
                    </div>
                </li>
            </ul>
        </section>
    );
};

export default Experience;
