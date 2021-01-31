import React, {Component} from "react";
import './add-new-list.scss';

export default class AddNewList extends Component {

    state = {
        label: '',
    }

    onLabelChange = (event) => {

        this.setState({label: event.target.value});

    }
    onSubmit = (event) =>{
        event.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: '',
        });
    }

    render() {

        return (
            <form className="input-group mb-3 mt-1" onSubmit={this.onSubmit}>
                <div className="input-group-prepend">
                    <button className="btn btn-outline-secondary new" type="submit">
                        Add
                    </button>
                </div>
                <input type="text" className="form-control" placeholder="" aria-label=""
                       aria-describedby="basic-addon1"
                       onChange={this.onLabelChange}
                       value={this.state.label}
                />
            </form>
        )
    }
}