import React from 'react';
import './Announcement.css';

const announcement = (props) => {
    return (
        <div className="modal fade bs-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    </div>
                    <div className="modal-body" id="announcement">
                        {props.winner && props.winner.name}님<br />
                        축하합니다!
                    </div>
                </div>
            </div>
        </div>
    );
};

export default announcement;