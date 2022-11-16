import React, { MouseEventHandler } from 'react';

interface ICTA {
  title: string;
  subtitle?: string;
  function: MouseEventHandler;
  linktext: string;
}

const CTA = (props: ICTA) => {
  return (
    <div className="cta">
      <div className="left">
        <h3>{props.title}</h3>
        {props.subtitle && <h6>{props.subtitle}</h6>}
      </div>
      <div className="right">
        <button type="button" onClick={props.function}>
          {props.linktext}
        </button>
      </div>
    </div>
  );
};

export default CTA;
