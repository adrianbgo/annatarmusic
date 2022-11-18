import React, { MouseEventHandler } from 'react';

interface ITooltip {
  text: string;
  action?: MouseEventHandler;
}

const Tooltip = ({ text, action }: ITooltip) => {
  return (
    <div className="tooltip" onClick={action}>
      <b>
        <span className="icon">&#x1F6c8;</span>
        <span className="text">
          <small>{text}</small>
        </span>
      </b>
    </div>
  );
};

export default Tooltip;
