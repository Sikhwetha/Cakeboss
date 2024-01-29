import React from 'react';
import './MeetOurChefs.css';
import m1 from '../image/m1.jpg';
import m2 from '../image/m2.jpg';

const MeetOurChefs = () => {
    const chefs = [
        {
            name: 'Chef John Doe',
            expertise: 'Italian Cuisine',
            image: m1, // Use the imported image directly
            bio: 'With over 15 years of culinary experience, Chef John specializes in creating authentic Italian dishes that captivate the taste buds.',
            social: {
                twitter: 'https://twitter.com/chefjohndoe',
                instagram: 'https://www.instagram.com/chefjohndoe/',
            },
        },
        {
            name: 'Chef Jane Smith',
            expertise: 'Asian Fusion',
            image: m2, // Use the imported image directly
            bio: 'Chef Jane is known for her innovative approach to Asian Fusion cuisine. Her passion for blending flavors and textures results in unforgettable dining experiences.',
            social: {
                facebook: 'https://www.facebook.com/chefjanesmith',
                linkedin: 'https://www.linkedin.com/in/chefjanesmith/',
            },
        },
        // Add more chefs as needed
    ];

    return (
        <section className="meet-our-chefs">
            <h1>Meet Our Chefs</h1>
            <div className="chefs-container">
                {chefs.map((chef, index) => (
                    <div key={index} className="chef-card">
                        <img src={chef.image} alt={chef.name} />
                        <h2>{chef.name}</h2>
                        <p>{chef.expertise}</p>
                        <p className="bio">{chef.bio}</p>
                        <div className="social-links">
                            {chef.social.twitter && <a href={chef.social.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>}
                            {chef.social.instagram && <a href={chef.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>}
                            {chef.social.facebook && <a href={chef.social.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>}
                            {chef.social.linkedin && <a href={chef.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default MeetOurChefs;
