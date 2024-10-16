import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center p-6  md:p-12">
      <div className="bg-white p-8 md:p-16 rounded-lg shadow-lg border-[2px] border-gray-800 max-w-3xl w-full fade-in">
        <h1 className="text-2xl font-bold mb-4 text-center slide-up">About Us</h1>
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-700 slide-up">UPSCBEACON</h2>
        <p className="text-center text-lg italic text-gray-600 mb-8 slide-up">
          "Where aspiration meets success"
        </p>
        <section className="mb-8 slide-up">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Mission</h3>
          <p className="text-gray-600">
            At UPSCBEACON, our mission is to provide free and comprehensive resources for UPSC aspirants. We aim to create a platform where users can post and update resources like articles, study materials, and other valuable content to help each other succeed in their UPSC journey.
          </p>
        </section>
        <section className="mb-8 slide-up">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Vision</h3>
          <p className="text-gray-600">
            We envision a community-driven platform that empowers UPSC aspirants with the knowledge and resources they need to achieve their goals. By fostering a collaborative environment, we strive to make UPSCBEACON the go-to destination for all things related to UPSC preparation.
          </p>
        </section>
        <section className="mb-8 slide-up">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Values</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Accessibility: Providing free resources to all aspirants.</li>
            <li>Collaboration: Encouraging users to share and update valuable content.</li>
            <li>Excellence: Striving for the highest quality in all our resources.</li>
            <li>Support: Building a supportive community for all UPSC aspirants.</li>
          </ul>
        </section>
        <section className="mb-8 slide-up">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Meet Our Team</h3>
          <p className="text-gray-600">
            Our team is composed of dedicated educators, experienced UPSC mentors, and passionate individuals who are committed to helping you succeed. We work tirelessly to curate and update the best resources to ensure you have everything you need for your UPSC preparation.
          </p>
        </section>
        <section className="slide-up">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Join Our Community</h3>
          <p className="text-gray-600">
            Become a part of the UPSCBEACON community today! Share your knowledge, learn from others, and take a step closer to achieving your UPSC dreams. Together, we can make success a reality.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
