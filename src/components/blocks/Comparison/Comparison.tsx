import { Column } from '@/components/molecules';
import { IColumn } from '@/components/molecules/Column/Column';
import React from 'react';

const features: IColumn['features'] = [
  {
    text: 'Untagged MP3 + WAV',
    included: true,
  },
  {
    text: 'Use for 1 music video',
    included: true,
  },
  {
    text: ['Max 100,000 streams', 'Max 500,000 streams', 'Unlimited Streams'],
    included: true,
  },
  {
    text: ['Sell 5,000 copies', 'Sell 10,000 copies', 'Sell unlimited copies'],
    included: true,
  },
  {
    text: 'Upload to Spotify, iTunes, Apple Music, etc.',
    included: true,
  },
  {
    text: 'Tracked out files',
    included: [false, true, true],
  },
  {
    text: 'Paid performances',
    included: [false, true, true],
  },
  {
    text: ['Radio airplay', 'Radio airplay (2 stations)', 'Unlimited radio airplay'],
    included: [false, true, true],
  },
  {
    text: 'YouTube monetization',
    included: [false, false, true],
  },
  {
    text: 'Credit must be given: "Prod by Annatar Music"',
    included: true,
  },
];
const Comparison = () => {
  return (
    <div className="comparison">
      <Column features={features} item={0} title="Basic" subtitle="Non-Exclusive" price="$50" />
      <Column features={features} item={1} title="Premium" subtitle="Non-Exclusive" price="$125" />
      <Column features={features} item={2} title="Unlimited" subtitle="Non-Exclusive" price="$200" />
    </div>
  );
};

export default Comparison;
