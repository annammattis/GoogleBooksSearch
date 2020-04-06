import React, { Component } from "react";
import SearchArea from './SearchArea';
import request from 'superagent';

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchField: ''
        }
    }

    searchBook = () => {
        request.get("https://www.googleapis.com/books/v1/volumes")
        .query({ q: this.searchField })
        .then(data) => {
          console.log(data);
        }
    }

    handleSearch = (event) => {
        this.setState({ searchField: event.target.value})
    }

  render() {
    return (
      <div>
          <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch}/>
      </div>
    );
  }
}

export default Books;