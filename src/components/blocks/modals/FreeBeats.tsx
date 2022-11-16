import React from 'react';
import ReactDOM from 'react-dom';
import { IModal } from './@types';

const FreeBeats = ({ isShowing, hide }: IModal) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="freebeat">
            <div className="modal">
              <button className="close" type="button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                <span aria-hidden="true">&times;</span>
              </button>
              <p className="text-h3">Sign Up For</p>
              <p className="text-h2">30+ Free Beats</p>
              <p className="text-h4">
                Get access to 30+ free beats and be the first to receive updates about new beats and special deals.
              </p>
              <form action="">
                <input type="text" name="fName" id="fName" placeholder="Your First Name" />
                <input type="email" name="email" id="email" placeholder="Your Email" />
                <button type="submit">Give Me That</button>
              </form>
              <small>I respect your inbox and will never spam!</small>
            </div>
          </div>
        </>,
        document.body,
      )
    : null;

export default FreeBeats;
