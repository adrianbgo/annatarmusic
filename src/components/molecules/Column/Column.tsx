import { FeatureItem } from '@/components/atoms';
import React, { ReactElement } from 'react';

export interface IColumn {
  features: {
    text: string | string[];
    included: boolean | boolean[];
  }[];
  item: number;
  title: string;
  subtitle: string;
  price: string;
}

const Column = ({ features, item, title, subtitle, price }: IColumn) => {
  let featureArray: Array<ReactElement> = [];
  features.forEach(feature => {
    featureArray.push(
      <FeatureItem
        text={Array.isArray(feature.text) ? feature.text[item] : feature.text}
        included={Array.isArray(feature.included) ? feature.included[item] : feature.included}
      />,
    );
  });
  return (
    <div className="column">
      <div className="header">
        {title && <p className="text-h2 title">{title}</p>}
        {subtitle && <small className="subtitle">{subtitle}</small>}
        {price && <p className="text-h3 price">{price}</p>}
      </div>
      <div className="items">{featureArray}</div>
      <button type="button" className="full-terms">
        View Full Terms
      </button>
    </div>
  );
};

export default Column;
