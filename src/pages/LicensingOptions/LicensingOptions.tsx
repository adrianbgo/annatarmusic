import { Comparison, Exclusives } from '@/components/blocks';
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
    </div>
  );
};

export default LicensingOptions;
