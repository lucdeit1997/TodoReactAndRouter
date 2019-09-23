import React, { Component } from "react";

export class Search extends Component {

    _getKeySearch = (e) =>{
        let { value } = e.target;
        let { getKeySearch } = this.props;
        getKeySearch(value);
    }
  render() {
    return (
        <div className="col-md-6">
            <div className="md-form">
                <label htmlFor="form1">Tìm kiếm</label>
                <input type="text" id="form1" className="form-control" onChange={ this._getKeySearch } />
            </div>
        </div>
    );
  }
}

export default Search;
