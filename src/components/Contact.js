import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div className="form-container">
    <h2>Send us a Message</h2>
    <form>
      <label htmlFor="name">Your Name</label>
      <input type="text" id="name" name="name" placeholder="Your Name" />

      <label htmlFor="email">Your Email</label>
      <input type="email" id="email" name="email" placeholder="Your Email" />

      <label htmlFor="phone">Your Phone</label>
      <input type="tel" id="phone" name="phone" placeholder="Your Phone" />

      <label htmlFor="subject">Subject</label>
      <input type="text" id="subject" name="subject" placeholder="Subject" />

      <label htmlFor="message">Your Message</label>
      <textarea id="message" name="message" placeholder="Your Message"></textarea>

      <button type="submit">Send Message</button>
    </form>
  </div>
  )
}
