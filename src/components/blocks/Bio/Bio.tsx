import React from 'react';

const Bio = () => (
  <div className="bio">
    <p className="text-h2">Hey there!</p>
    <p className="subtitle">
      <b>My name is Adrian Bauer and I'm a music producer from Cleveland, Ohio. Thanks for checking out my music!</b>
    </p>
    <p className="body">
      I've been producing since 2011. Besides being a music producer, I'm also a music director and music educator.
    </p>
    <p className="body">
      I specialize in{' '}
      <a href="/lofi-beats" className="link">
        LoFi beats
      </a>{' '}
      and{' '}
      <a href="http://" className="link">
        Pop beats
      </a>
      . My music is a combination of 90's lofi with modern mainstream pop.
    </p>
  </div>
);

export default Bio;
