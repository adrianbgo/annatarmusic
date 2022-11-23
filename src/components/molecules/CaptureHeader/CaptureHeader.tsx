import React from 'react';

interface ICaptureHeader {
  title: string;
  subtitle: string;
}

const CaptureHeader = ({ title, subtitle }: ICaptureHeader) => {
  return (
    <div className="capture-header">
      <p className="text-h1">{title}</p>
      <p className="text-h4">{subtitle}</p>
    </div>
  );
};

export default CaptureHeader;
