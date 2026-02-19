import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profileImage from '../../assets/formal.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Saakshi Jha
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#45ecdb] leading-tight">
            <span className="text-[#45ecb1]">I am a </span>
            <ReactTypingEffect
              text={[
                'Fullstack Developer',
                'React Developer',
                'Problem Solver',
                'UI/UX Enthusiast',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#45ecd3]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            A passionate full-stack developer with strong foundations in frontend development, backend systems, and logical problem-solving. I enjoy building clean, responsive, and user-focused web applications while continuously sharpening my programming, debugging, and system design skills.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1E6OGlEyub-BuQtDbQYFDZQV9JbJTPPNI/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1e8175] text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
          >
            DOWNLOAD CV
          </a>
          
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-x-zinc-600 rounded-full">
            <img
              src={profileImage}
              alt="Saakshi Jha"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
