import { FreeBeats } from '@/components/blocks';
import useModal from '@/hooks/useModal';
import React from 'react';
import CTA from '../CTA';

const EmailSignup = () => {
  const { isShowing, toggle } = useModal();
  return (
    <div className="emailsignup">
      <CTA
        title="Get 30+ Beats, Straight to Your Inbox!"
        subtitle="Get access to 30+ free beats and be the first to receive updtaes about new beats and special deals."
        linktext="Send it over!"
        function={toggle}
      />
      <FreeBeats isShowing={isShowing} hide={toggle} />
    </div>
  );
};

export default EmailSignup;
