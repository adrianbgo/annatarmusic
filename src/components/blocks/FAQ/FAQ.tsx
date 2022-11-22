import { Accordion } from '@/components/atoms';
import React, { ReactElement } from 'react';

export interface IQuestion {
  title: string;
  body: string;
}
interface IFAQ {
  questions: Array<IQuestion>;
}
const FAQ = ({ questions }: IFAQ) => {
  let qArray: Array<ReactElement> = [];
  let numQ = 0;
  questions.forEach(question => {
    qArray.push(
      <>
        <Accordion title={question.title} body={question.body} id={'question-' + numQ} />
      </>,
    );
    numQ++;
  });
  return <div className="faq">{qArray}</div>;
};

export default FAQ;
