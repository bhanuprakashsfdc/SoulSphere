import React from 'react';
import './Courses.css';

function Courses({ courses }) {
    return (
        <section className="courses-one">
            <div className="container">
                <h2 className="section-title text-center">Our Courses</h2>
                <div className="courses-grid">
                    {courses.map((course, index) => (
                        <div key={index} className="course-card">
                            <div className="course-image">
                                <img src={course.imageUrl} alt={course.title} />
                            </div>
                            <div className="course-content">
                                <span className="course-tag">{course.category}</span>
                                <h3 className="course-title">{course.title}</h3>
                                <div className="course-meta">
                                    {course.lessons} Lessons | {course.duration}
                                </div>
                                <div className="course-rating">
                                    {Array(course.rating).fill().map((_, i) => (
                                        <span key={i} className="star">★</span>
                                    ))}
                                </div>
                                <p className="course-price">${course.price}</p>
                                <a href={course.link} className="course-btn">Learn More</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Courses;
