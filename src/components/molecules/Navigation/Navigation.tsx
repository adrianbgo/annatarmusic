import Hotlink from '@/components/atoms/Hotlink';
import Logo from '@/components/atoms/Logo';
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navbar">
      <Logo />
      <ul>
        <li>
          Buy Beats
          <ul>
            <li className="link">
              <Link to="/">All Beats</Link>
            </li>
            <li className="link">
              <Link to="/">LoFi</Link>
            </li>
            <li className="link">
              <Link to="/">Pop</Link>
            </li>
          </ul>
        </li>
        <li>
          Licensing
          <ul>
            <li className="link">
              <Link to="/">Licensing Options</Link>
            </li>
            <li className="link">
              <Link to="/">Upgrade License</Link>
            </li>
          </ul>
        </li>
        <li className="link">
          <Link to="/">Blog</Link>
        </li>
        <li>
          About
          <ul>
            <li className="link">
              <Link to="/">Bio</Link>
            </li>
            <li className="link">
              <Link to="/">Contact</Link>
            </li>
            <li className="link">
              <Link to="/">Press Kit</Link>
            </li>
          </ul>
        </li>
      </ul>
      <Hotlink variant="primary" text="View Beats" />
    </div>
  );
};

export default Navigation;
