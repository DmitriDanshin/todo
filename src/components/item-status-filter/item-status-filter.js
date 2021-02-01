import React, {Component} from 'react';
import './item-status-filter.scss';


export default class ItemStatusFilter extends Component {
    buttons = [{
        name: 'all',
        label: 'All'
    },
        {
            name: 'active',
            label: 'Active'
        },
        {
            name: 'done',
            label: 'Done'
        }]

    render() {

        const {filter, onFilterChanged} = this.props;

        const buttons = this.buttons.map(({name, label}) => {

            const isActive = filter === name;
            const clazz = isActive ? 'btn-info' : 'btn-outline-secondary'

            return (
                <label className={`btn ${clazz}`} key={name}>
                    <input type="radio" name="options" id={name} autoComplete="off"
                           onClick={() => onFilterChanged(name)}/> {label}
                </label>
            )
        });


        return (
            <div className="btn-group btn-group-toggle" data-toggle="buttons" onChange={this.props.toggleStatus}>
                {buttons}
            </div>
        );
    }
};