import React from 'react';
interface IAccordion {
  title: string;
  body: string;
  id: string;
}

const Accordion = ({ title, body, id }: IAccordion) => {
  return (
    <div className="accordion">
      <input type="checkbox" id={id} />
      <label className="accordion-label text-h4" htmlFor={id}>
        {title}
      </label>
      <div className="accordion-body">{body}</div>
    </div>
  );
};

export default Accordion;
