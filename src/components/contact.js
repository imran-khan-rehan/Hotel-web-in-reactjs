import React, { useState, useEffect } from "react";
import bg1 from ".././assets/room4.jpg";
import bg2 from ".././assets/room2.jpg";
import bg3 from ".././assets/room3.jpg";
import './styles/contact.css';
const imagesArray = [bg1, bg2, bg3];
// Add more imported images to the array as needed

export default function Contact() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesArray.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
     
      <section
      className="user-section"
      style={{ backgroundImage: `url(${imagesArray[currentImageIndex]})` }}
    >
      <h2>User Information</h2>
    </section>
    </>
  );
}
