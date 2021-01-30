import React from 'react';
import './item-status-filter.scss';

const ItemStatusFilter = () => {
    return (
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label className={"btn btn-secondary active"}>
                <input type="radio" name="options" id="option1" autocomplete="off" checked/> All
            </label>
            <label className={"btn btn-secondary"}>
                <input type="radio" name="options" id="option2" autoComplete="off" checked/> Active
            </label>
            <label className={"btn btn-secondary "}>
                <input type="radio" name="options" id="option3" autoComplete="off" checked/> Done
            </label>
        </div>

    )

};

export default ItemStatusFilter;