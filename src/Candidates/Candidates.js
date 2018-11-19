import React from 'react';
import './Candidates.css';

const candidates = (props) => {
    const rows = (
        <tbody>
        {
            props.candidates.map(c => {
                return (
                    <tr key={c.id}>
                        <td>{c.name}</td>
                        <td>{'| '.repeat(c.count)}</td>
                        <td>{c.count}</td>
                        <td>
                            <div className="btn-group">
                                <button className="btn btn-default" onClick={() => props.increase(c.id)}><span className="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
                                <button className="btn btn-default" onClick={() => props.decrease(c.id)}><span className="glyphicon glyphicon-minus" aria-hidden="true"></span></button>
                                <button className="btn btn-default" onClick={() => props.remove(c.id)}><span className="glyphicon glyphicon-remove text-danger" aria-hidden="true"></span></button>
                                <button className="btn btn-default" onClick={() => props.select(c.id)} data-toggle="modal" data-target=".bs-example-modal-lg"><span className="glyphicon glyphicon-ok text-success" aria-hidden="true"></span></button>
                            </div>
                        </td>
                    </tr>
                );
            })
        }
        </tbody>
    );
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th className="name"></th>
                    <th className="tally"></th>
                    <th className="count"></th>
                    <th className="control"></th>
                </tr>
            </thead>
            {rows}
            <tfoot>
                <tr className="total">
                    <td>Total</td>
                    <td></td>
                    <td>{props.candidates.reduce((total, c) => total + c.count, 0)}</td>
                    <td></td>
                </tr>
            </tfoot>
        </table>
    );
};

export default candidates;