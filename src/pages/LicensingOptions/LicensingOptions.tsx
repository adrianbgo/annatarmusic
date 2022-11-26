import { Comparison, Exclusives, LearnMore } from '@/components/blocks';
import { CaptureHeader } from '@/components/molecules';
import React from 'react';

const LicensingOptions = () => {
  return (
    <div className="licensing-options">
      <CaptureHeader
        title="Ready to get started?"
        subtitle="Since 2011, I've helped thousands of artists to find the perfect sound"
      />
      <Comparison />
      <p className="upgrade-offer">
        If you wish to upgrade your current license, click <a href="/upgrade-license">HERE</a>
      </p>
      <div className="license-upgrade">
        <p className="text-h4 struggle">Struggling to choose which license to purchase?</p>
        <div className="help-choose-link">
          <a href="/">Help me choose</a>
        </div>
      </div>
      <Exclusives />
      <LearnMore
        header="Learn more about licensing"
        body="I get it... Beat licensing is confusing for a lot of people. Read my article in which I explain the details and what matters to you as an artist."
        linktext='READ "The Ultimate Guide to Online Beat Licensing"'
        linkurl="/"
      />
    </div>
  );
};

export default LicensingOptions;
