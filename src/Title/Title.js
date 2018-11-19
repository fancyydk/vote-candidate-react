import React from 'react';
import './Title.css';

const title = (props) => {
    let title = null;

    if (props.edit) {
        title = (
            <div className="input-group input-group-lg">
                <input type="text" className="form-control title" onChange={props.change} value={props.title} onFocus={props.focus} />
                <span className="input-group-btn">
                    <button className="btn btn-default">
                        <span className="glyphicon glyphicon-ok text-success" aria-hidden="true" onClick={props.submit}></span>
                    </button>
                </span>
            </div>
        );
    } else {
        title = <h1 onClick={props.click} className="title">{props.title}</h1>;
    }

    return (
        <div>
            {title}
        </div>
    );
}

export default title;