import React from 'react';
import { useCounter } from '@/hooks/useCounter';
import { Hero, BeatStore } from '@/components/blocks';
import { Tooltip } from '@/components/atoms';
import CTA from '@/components/molecules/CTA';
import useModal from '@/hooks/useModal';
import LicensingHelp from '@/components/blocks/modals/LicensingHelp';

const Home = () => {
  const { isShowing, toggle } = useModal();
  return (
    <>
      <Hero />
      <BeatStore />
      <Tooltip text="View full licensing terms" />
      <CTA
        title="Need help choosing a license?"
        linktext="Help me choose"
        subtitle="It's hard choosing a license. Click through for some help"
        function={toggle}
      />
      <LicensingHelp hide={toggle} isShowing={isShowing} />
    </>
  );
};

export default Home;
