import React, {Component} from "react";
import './add-new-list.scss';

export default class AddNewList extends Component {
    render() {
        return (
            <div className={"add-new-list"}>
                <button type="button" className="btn btn-light btn-block new "
                onClick={() => this.props.onItemAdded("Hello world") } >&#43;</button>
            </div>
        );
    }
}