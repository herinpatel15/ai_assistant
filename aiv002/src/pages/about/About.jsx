import React from "react";
import "./about.css";

function About() {
  return (
    <main className="main-about">
      <div className="about-box">
        <h1>About Us</h1>
        <article>
          Welcome to aiAssistant, your ultimate destination for AI tools and
          prompts! Our platform is designed to empower users like you to explore
          the exciting world of artificial intelligence through curated prompts
          and a comprehensive list of AI tools. Whether you're a seasoned AI
          enthusiast or just starting your journey, we're here to provide you
          with the resources and inspiration you need to unleash your creativity
          and problem-solving potential.
        </article>
      </div>
      <div className="about-box">
        <h1>Our Mission</h1>
        <article>
          At aiAssistant, our mission is simple: to democratize access
          to AI tools and knowledge. We believe that everyone should have the
          opportunity to harness the power of artificial intelligence,
          regardless of their background or expertise. By offering a
          user-friendly platform packed with valuable resources, we strive to
          break down barriers and foster a community of innovation and
          collaboration.
        </article>
      </div>
      <div className="about-box">
        <h1>Join Us</h1>
        <article>
        Interested in contributing to aiAssistant? Whether you're a developer, designer, writer, or AI enthusiast, we're always on the lookout for talented individuals to join our team. Visit our Careers page to learn more about current opportunities and how you can get involved.
        </article>
      </div>
      <p className="last">Thank you for choosing aiAssistant as your go-to resource for AI tools and prompts. We can't wait to see what you create!</p>
    </main>
  );
}

export default About;
