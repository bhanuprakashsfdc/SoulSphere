import React from 'react'
import Hero from '../components/Hero/Hero'
import Courses from '../components/Courses/Courses'

const Home = () => {
  const puranasData = [
    { title: "Bhagavata Purana", category: "Purana", imageUrl: "path/to/bhagavata-purana.jpg", lessons: "18,000 Verses", duration: "Eternal teachings", rating: 5, price: "Free", link: "#" },
    { title: "Vishnu Purana", category: "Purana", imageUrl: "path/to/vishnu-purana.jpg", lessons: "23,000 Verses", duration: "Eternal teachings", rating: 5, price: "Free", link: "#" },
    { title: "Shiva Purana", category: "Purana", imageUrl: "path/to/shiva-purana.jpg", lessons: "24,000 Verses", duration: "Eternal teachings", rating: 5, price: "Free", link: "#" },
    { title: "Markandeya Purana", category: "Purana", imageUrl: "path/to/markandeya-purana.jpg", lessons: "9,000 Verses", duration: "Eternal teachings", rating: 5, price: "Free", link: "#" },
    { title: "Garuda Purana", category: "Purana", imageUrl: "path/to/garuda-purana.jpg", lessons: "19,000 Verses", duration: "Eternal teachings", rating: 5, price: "Free", link: "#" },
    { title: "Padma Purana", category: "Purana", imageUrl: "path/to/padma-purana.jpg", lessons: "55,000 Verses", duration: "Eternal teachings", rating: 5, price: "Free", link: "#" },
    { title: "Brahma Purana", category: "Purana", imageUrl: "path/to/brahma-purana.jpg", lessons: "10,000 Verses", duration: "Eternal teachings", rating: 5, price: "Free", link: "#" },
    { title: "Brahmanda Purana", category: "Purana", imageUrl: "path/to/brahmanda-purana.jpg", lessons: "12,000 Verses", duration: "Eternal teachings", rating: 5, price: "Free", link: "#" }
  ];

  return (
    <div>
      <Hero
                bgImage="assets/images/hero-background.jpg"
                title="Welcome to Indian Mythology"
                subtitle="Explore the rich history of India's epic legends."
                ctaText="Learn More"
                ctaLink="/about"
            />
      <Courses courses={puranasData} />
    </div>
  )
}

export default Home