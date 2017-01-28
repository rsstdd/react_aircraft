import React from 'react';
import ReactDOM from 'react-dom';

export default class FilterControls extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    const searchText = event.target.value;

    this.props.handleSearch(searchText);
  }

  // handleSort(event) {
  //   this.props.handleSort(event.target.value);
  // }

  render() {
    console.log(this.handlesearch);
    return (
      <div className="container">
        <div className="row">
          <div className="input-field eight">
            <input
              type="text"
              value={this.props.search}
              onChange={this.handleSearch}
              placeholder="Filter by Name"
            />
          </div>
          <div className="input-field four">
            <select
              onChange={this.handleSort}
              ref='mySelectBox'
              value={this.props.sortType}
            >
              <option value="title">Name</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}
