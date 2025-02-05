import React from 'react';
import './Hero.css';

function Hero({ bgImage, title, subtitle, ctaText, ctaLink }) {
    return (
        <section className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title">{title}</h1>
                    <p className="hero-subtitle">{subtitle}</p>
                    {ctaText && <a href={ctaLink} className="hero-btn">{ctaText}</a>}
                </div>
            </div>
        </section>
    );
}

export default Hero;
