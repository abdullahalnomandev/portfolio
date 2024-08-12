import React from 'react';
import noman from '@/assets/images/Abdullah_Al_Noman.jpg'
import Image from 'next/image';
const ContactPage = () => {
    return (
        <div className="profile-section">
        <div className="image-container">
          <Image
            src={noman}
            alt="Abdullah Al Noman"
            width={500} 
            height={500}
            layout="responsive" 
          />
        </div>
        <div className="details-container">
          <h1>I&rsquo;m Abdullah Al Noman</h1>
          <p>
            A self-spurred and energetic web designer with a profound interest in JavaScript. To work in the Software business with current web innovations of various neighborhood and worldwide Software/IT offices of Bangladesh and develop quickly with expanding duties.
          </p>
          <a href="/path-to-cv.pdf" className="download-cv-button">
            Download CV
          </a>
        </div>
      </div>
    );
};

export default ContactPage;