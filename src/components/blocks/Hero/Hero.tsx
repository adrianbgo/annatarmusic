import Logo from '@/components/atoms/Logo';
import CTA from '@/components/molecules/CTA';
import useModal from '@/hooks/useModal';
import React from 'react';
import FreeBeats from '../modals';

const Hero = () => {
  const { isShowing, toggle } = useModal();
  return (
    <div className="hero">
      <Logo />
      <h2 className="text-h1">High Quality Beats for Artists and Creators</h2>
      <CTA
        title="Get 30+ FREE BEATS"
        subtitle="Delivered in your inbox TODAY!"
        linktext="Send it over!"
        function={toggle}
      />
      <FreeBeats isShowing={isShowing} hide={toggle} />
    </div>
  );
};

export default Hero;
