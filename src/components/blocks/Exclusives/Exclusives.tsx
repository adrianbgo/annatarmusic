import React from 'react';

const Exclusives = () => {
  return (
    <div className="exclusives">
      <img src="https://via.placeholder.com/450x450" alt="Annatar On Stage" />
      <div className="right">
        <p className="text-h2">Interested in exclusive rights?</p>
        <p className="body">I don't sell exclusive rights to every artist.</p>
        <p className="body">
          PLease send me some of your (previous) work or demos and tell me more about yourself as an artist.
        </p>
        <p className="body">Inquire using the button below.</p>
        <div className="inquiry">
          <a href="/">
            <i className="fa-regular fa-hand-peace" /> Inquire about exclusive rights
          </a>
        </div>
      </div>
    </div>
  );
};

export default Exclusives;
