import React, {Component} from 'react';
import './item-status-filter.scss';


export default class ItemStatusFilter extends Component {

    render() {
        return (
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label className={"btn btn-secondary active"}>
                    <input type="radio" name="options" id="option1" autoComplete="off" /> All
                </label>
                <label className={"btn btn-secondary"}>
                    <input type="radio" name="options" id="option2" autoComplete="off" /> Active
                </label>
                <label className={"btn btn-secondary "}>
                    <input type="radio" name="options" id="option3" autoComplete="off" /> Done
                </label>
            </div>
        );
    }
};