import React from 'react';
import ReactDOM from 'react-dom';
import { IModal } from './@types';

const LicensingHelp = ({ isShowing, hide }: IModal) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="licensinghelp">
            <div className="modal">
              <button className="close" type="button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="text">
                <div>
                  <p className="text-h3">Basic License</p>
                  <p>Price: $50</p>
                  <p>
                    Semi-professional license that is typically used by beginner artists that want to promote their song
                    on SoundCloud or YouTube (non-monetised).
                  </p>
                  <p>This license comes with an industry quality single Wav-track but not with tracked-out files.</p>
                  <p>
                    Distribution on all major platforms is limited and paid performances and radio airplay is not
                    permitted.
                  </p>
                </div>
                <div>
                  <p className="text-h3">Basic License</p>
                  <p>Price: $50</p>
                  <p>
                    Semi-professional license that is typically used by beginner artists that want to promote their song
                    on SoundCloud or YouTube (non-monetised).
                  </p>
                  <p>This license comes with an industry quality single Wav-track but not with tracked-out files.</p>
                  <p>
                    Distribution on all major platforms is limited and paid performances and radio airplay is not
                    permitted.
                  </p>
                </div>
                <div>
                  <p className="text-h3">Basic License</p>
                  <p>Price: $50</p>
                  <p>
                    Semi-professional license that is typically used by beginner artists that want to promote their song
                    on SoundCloud or YouTube (non-monetised).
                  </p>
                  <p>This license comes with an industry quality single Wav-track but not with tracked-out files.</p>
                  <p>
                    Distribution on all major platforms is limited and paid performances and radio airplay is not
                    permitted.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>,
        document.body,
      )
    : null;

export default LicensingHelp;
