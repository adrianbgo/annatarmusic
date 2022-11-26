import { EmailSignup } from '@/components/molecules';
import React from 'react';
const Footer = () => {
  return (
    <div className="footer">
      <div className="column">
        <p className="head text-h4">Get Started</p>
        <a href="/" className="link text-h5">
          Buy Beats
        </a>
        <a href="/licensing" className="link text-h5">
          Licensing Options
        </a>
        <a href="/upgrade-license" className="link text-h5">
          Upgrade License
        </a>
        <a href="/custom-beats" className="link text-h5">
          Custom Beats
        </a>
        <a href="/contact" className="link text-h5">
          Contact
        </a>
        <a href="/privacy-policy" className="link text-h5">
          Privacy Policy
        </a>
      </div>
      <div className="column">
        <p className="head text-h4">Guides</p>
        <a href="/blog/licensing-guide" className="link text-h5">
          The Beginner's Guide to Online Beat Licensing
        </a>
        <a href="/blog/first-beat" className="link text-h5">
          Buying Your First Beat
        </a>
      </div>
      <div className="column" id="email">
        <EmailSignup />
      </div>
    </div>
  );
};

export default Footer;
