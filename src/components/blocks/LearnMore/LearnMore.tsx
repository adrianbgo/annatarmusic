import React from 'react';

interface ILearnMore {
  header: string;
  body: string;
  linktext: string;
  linkurl: string;
}
const LearnMore = ({ header, body, linktext, linkurl }: ILearnMore) => {
  return (
    <div className="learnmore">
      <p className="text-h2">{header}</p>
      <p className="body text-h4">{body}</p>
      <div className="button">
        <a href={linkurl} className="link">
          {linktext}
        </a>
      </div>
    </div>
  );
};

export default LearnMore;
