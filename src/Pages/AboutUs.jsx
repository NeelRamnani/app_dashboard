import React from 'react';

const AboutUs = () => {
  const textStyle = { color: 'white' };

  return (
    
    <div style={{ ...textStyle, padding: '20px', backgroundColor: 'black', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={textStyle}>About Us</h1>
      <br></br><br></br><br></br><br></br> <br></br><br></br>
      <p style={textStyle}>
        Welcome to <strong>[ImaginAi]</strong>, where innovation meets creativity in the world of image generation. Our mission is to transform how you create and interact with visuals by leveraging the latest advancements in artificial intelligence. Whether you're a professional designer, a content creator, or simply someone passionate about visual art, our tools are designed to cater to your needs with precision and creativity.
      </p>
      <br></br><br></br>
      <h2 style={textStyle}>Who We Are</h2>
      <p style={textStyle}>
        At <strong>ImaginAi</strong>, we are a dedicated team of developers, designers, and AI enthusiasts. Our team includes Qasim, Neel, Abu Bakar, and Saad Hussain, who are committed to pushing the boundaries of digital imagery. With expertise spanning computer vision, deep learning, and user experience design, we ensure that our platform not only delivers stunning visuals but also provides an intuitive and user-friendly experience.
      </p>
      <br></br><br></br>
      <h2 style={textStyle}>Our Vision</h2>
      <p style={textStyle}>
        We aim to democratize high-quality image creation, making advanced technology accessible to everyone. We believe that creativity should have no limits, and our AI-driven tools empower users to bring their visions to life with exceptional ease and efficiency.
      </p>
      <br></br><br></br>
      <h2 style={textStyle}>Why Choose Us</h2>
      <ul style={textStyle}>
        <li><strong>Innovative Technology:</strong> Our platform utilizes the latest advancements in AI to deliver unique and high-quality image generation capabilities.</li>
        <li><strong>User-Friendly Interface:</strong> Our intuitive interface is designed for ease of use, allowing anyone to create impressive images without needing technical expertise.</li>
        <li><strong>Customization and Flexibility:</strong> Customize your creations with a wide range of options to fit your specific needs and preferences.</li>
        <li><strong>Community and Support:</strong> Join a vibrant community of creators and receive support from our dedicated team whenever needed.</li>
      </ul>
      <br></br><br></br>
      <p style={textStyle}>
        Thank you for choosing <strong>ImaginAi</strong>. We are excited to see the incredible images you'll create with our tools. Together, let's push the boundaries of creativity!
      </p>
    </div>
  );
}

export default AboutUs;
