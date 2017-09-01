import React, { Component } from 'react';
export default class SearchBar extends Component {
    constructor(e) {
        super(e);
        this.state = {
            _filterText: this.props.filterText
        }
    }
    _changeHandler(v) {
        this.setState({
            _filterText: v
        });
    }
    render() {
        let { changeHandler } = this.props;
        let { _filterText } = this.state;
        return <div>
            <input type="text" name="" id="" onKeyPress ={(e) => {
                if(e.key=="Enter"){
                    changeHandler(e.target.value)
                }
            }} value={_filterText} onChange={(e) => { this._changeHandler(e.target.value) }} />
        </div>
    }
}
