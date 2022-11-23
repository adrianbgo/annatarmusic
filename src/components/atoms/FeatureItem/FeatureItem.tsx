import React from 'react';

export interface IFeatureItem {
  text: string;
  included: boolean;
}

const FeatureItem = ({ text, included }: IFeatureItem) => {
  return (
    <div className="featureItem">
      {included ? (
        <span className="fa-solid fa-sharp fa-circle-check"></span>
      ) : (
        <span className="fa-solid fa-sharp fa-times"></span>
      )}
      <p className="item">{text}</p>
    </div>
  );
};

export default FeatureItem;
