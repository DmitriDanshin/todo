import React, {Component} from "react";
import './search-panel.scss';
import ItemStatusFilter from "../item-status-filter/item-status-filter";


export default class SearchPanel extends Component {


    state = {
        label: '',
    }


    render() {
        const {filter, onFilterChanged} = this.props;

        return (
            <form className="input-group" >
                <input type="search" className="form-control rounded mr-1" placeholder="Search" aria-label="Search"
                       aria-describedby="search-addon" onChange={this.props.onSearched}/>
                <ItemStatusFilter toggleStatus={this.props.toggleStatus} active={true} filter = {filter}
                onFilterChanged = {onFilterChanged}/>

            </form>);

    }


}