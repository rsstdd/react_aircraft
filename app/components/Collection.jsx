import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Airplanes from './Airplanes';
import FlatButton from 'material-ui/FlatButton';
import FilterControls from './FilterControls';
import Header from './Header';
import React from 'react';

export default class Collection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ratingFilter: null,
      searchFilter: this.props.airplanes,
      sortType: 'name'
    };
  }

  handleSearch(searchText) {
    const search = searchText.toLowerCase().trim();
    const airplanes = this.props.airplanes;

    const searchFilter = airplanes.filter((item) => {
      for (const key in item) {
        const valString = item[key].toString().toLowerCase();

        if (valString.indexOf(search) !== -1) {
          return true;
        }
      }

      return false;
    });

    this.setState({ searchFilter });
  }

  handleSort(sortType) {
    let searchFilter = this.state.searchFilter.sort((a, b) => {
      if (a[sortType] < b[sortType]) {
        return 1;
      } else if (a[sortType] > b[sortType]) {
        return -1;
      } else {
        return 0;
      }
    });

    if (sortType === 'title') {
      searchFilter = searchFilter.reverse();

      this.setState({ searchFilter });
    } else {
      this.setState({ searchFilter });
    }
  }

  render() {
    console.log(this.props.airplanes);

    return (
      <div>
        <Header />
        <FilterControls
          handleSearch={this.handleSearch}
          handleSort={this.handleSort}
          sortType={this.sortType}
        />
        <Airplanes
          airplanes={this.props.airplanes}
          aircraft={this.state.searchFilter}
          handleAddToFav={this.props.handleAddToFav}
        />
      </div>
    );
  }
}
