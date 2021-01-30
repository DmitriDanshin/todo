import React from "react";
import './search-panel.scss';
import ItemStatusFilter from "../item-status-filter/item-status-filter";

const SearchPanel = () => {
    return (
        <div className="input-group">
            <input type="search" className="form-control rounded mr-1" placeholder="Search" aria-label="Search"
                   aria-describedby="search-addon"/>
            <ItemStatusFilter/>

        </div>);
}

export default SearchPanel;