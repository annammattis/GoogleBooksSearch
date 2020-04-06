import React, { Component } from "react";
import SearchArea from './SearchArea';


class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchField: ''
        }
    }

    handleSearch = (event) => {
        this.setState({ searchField: event.target.value})
    }

  render() {
    return (
      <div>
          <SearchArea handleSearch={this.handleSearch}/>
      </div>
    );
  }
}

export default Books;