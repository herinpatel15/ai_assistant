import "./hero.css";

import React, { useEffect, useState } from "react";

import {Link} from "react-router-dom";

import img1 from "../../assets/img/img1.png";
import img2 from "../../assets/img/img2.png";
import img3 from "../../assets/img/img3.png";
import img4 from "../../assets/img/img4.png";
import img5 from "../../assets/img/img5.png";
import img6 from "../../assets/img/img6.png";
import img7 from "../../assets/img/img7.png";
import img8 from "../../assets/img/img8.png";

function Hero() {
    const [currentImage, setCurrentImage] = useState(img5);
    const images = [img1, img2, img3, img4, img5, img6, img7, img8];

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
        setCurrentImage(images[i % images.length]);
        i = (i + 1) % images.length;
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <main className="main-hero">
        <section className="main">
            <div className="hero-img">
            <img src={currentImage} alt="hello" width={650} />
            </div>
            <div
            style={{
                display: "flex",
                alignItems: "start",
                justifyContent: "strat",
                flexDirection: "column",
                marginLeft: "4rem",
            }}
            >
            <h1 style={{ fontSize: "3vw" }}>
                Unlocking the World of{" "}
                <span style={{ color: "var(--main-color)" }}>AI</span> Tools
            </h1>
            <p style={{ fontSize: 20, marginLeft: 5, marginTop: 10 }}>
                Explore AI Tools with Us: Your Gateway to the World of AI.
                Demystifying and
                <br /> Simplifying AI for All.
            </p>
            <div
                style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "2.75rem",
                }}
            >
                <Link to="/aiAssistant"><button className="assis-btn">Assistant</button></Link>
                <Link to="/about"><button className="learn-btn">Learn More</button></Link>
            </div>
            </div>
        </section>
        {/* <section className="intro-sec">
            <h1 className="intro-title">Intoroduction</h1>
            <div>
                <div className="intro-box">
                    <h3>Welcome to our website dedicated to Artificial Intelligence (AI) tools and news. Our platform aims to provide valuable resources and updates on the latest advancements in AI technology. Whether you're a developer, researcher, student, or enthusiast, we strive to offer insightful content to fuel your journey in the world of AI.</h3>
                </div>
                <div className="intro-box">
                    <h2>Our Mission</h2>
                    <h3>Our mission is to democratize access to AI tools and knowledge, making them accessible to everyone. We believe in the transformative power of AI and its potential to drive innovation, solve complex problems, and improve lives across various industries.</h3>
                </div>
            </div>
        </section> */}
        </main>
    );
}

export default Hero;
