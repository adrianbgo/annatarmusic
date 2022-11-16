import React from 'react';

interface IHotlink {
  text: string;
  variant: 'primary' | 'secondary' | 'warning' | 'alert' | 'success';
}

const Hotlink = (props: IHotlink) => {
  return <button className={`hotlink-${props.variant}`}>{props.text}</button>;
};

export default Hotlink;
