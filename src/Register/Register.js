import React from 'react';

const register = (props) => {
    return (
        <div className="input-group">
            <input type="text" className="form-control" name="candidateName" id="candidateName" placeholder="후보 이름을 입력해주세요" onFocus={props.focus} />
            <span className="input-group-btn"><button className="btn btn-default" onClick={() => props.add(document.querySelector('#candidateName').value)}>+</button></span>
        </div>
    );
};

export default register;