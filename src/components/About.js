import React from 'react'
import './About.css'
import a1 from '../image/a1.jpg'
import a2 from '../image/a2.jpg'
import a3 from '../image/a3.jpg'

export default function About() {
  return (
    <div className="about-page">
    <h1>About Us</h1>
    <p>
      Welcome to Sweetest Cakes, where we turn ordinary moments into extraordinary memories through our delicious creations. Our journey began with a simple passion for baking and a dream to spread joy through the art of confectionery.
    </p>
    <p>
      At Sweetest Cakes, every treat is a masterpiece crafted with love and dedication. From moist and flavorful cakes to mouthwatering sweets, each item on our menu is a testament to our commitment to quality and taste.
    </p>
    <h2>Our Story</h2>
    <p>
      Sweetest Cakes was founded in [Year] by [Founder's Name]. What started as a small home-based bakery has now grown into a thriving business, thanks to the support of our wonderful customers. We take pride in our roots and continue to uphold the values of homemade goodness in every product we offer.
    </p>
    <h2>Company Values</h2>
    <ul>
      <li>Passion for Quality</li>
      <li>Customer-Centric Approach</li>
      <li>Creative Innovation</li>
      <li>Integrity and Transparency</li>
      <li>Community Engagement</li>
    </ul>
    <h2>Meet Our Team</h2>
    <div className="team-members">
      <div className="team-member">
        <img src={a1} alt="Baker 1" />
        <h3>John Doe</h3>
        <p>Head Pastry Chef</p>
      </div>
      <div className="team-member">
        <img src={a2} alt="Baker 2" />
        <h3>Jane Smith</h3>
        <p>Master Chocolatier</p>
      </div>
      <div className="team-member">
        <img src={a3} alt="Baker 2" />
        <h3>Jv STAR Smith</h3>
        <p>Master Chocolatier</p>
      </div>
      {/* Add more team members as needed */}
    </div>
    <h2>Customer Testimonials</h2>
    <div className="testimonials">
      <div className="testimonial">
        <p>"Absolutely delicious! The cakes from Sweetest Cakes made our celebration unforgettable. Thank you!"</p>
        <p>- Happy Customer 1</p>
      </div>
      <div className="testimonial">
        <p>"Exquisite taste and presentation. Sweetest Cakes never disappoints!"</p>
        <p>- Happy Customer 2</p>
      </div>
      {/* Add more testimonials as needed */}
    </div>
    <h2>Join Us in Sweetening Moments</h2>
    <p>
      At Sweetest Cakes, we are always excited to connect with fellow dessert enthusiasts. Whether you're planning a special event or simply want to treat yourself, we invite you to explore our delightful menu and experience the sweetness of life with us.
    </p>
    <p>
      Join us on this sweet journey, and let's create memorable moments together!
    </p>
  </div>
  )
}
