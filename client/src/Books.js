import React, { Component } from "react";
import SearchArea from './SearchArea';
import request from 'superagent';
import BookList from './BookList';

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchField: '',
            sort: ''
        }
    }

    searchBook = (event) => {
      event.preventDefault();
        request.get("https://www.googleapis.com/books/v1/volumes")
        .query({ q: this.state.searchField })
        .then((data) => {
          const cleanData = this.cleanData(data)
          this.setState({ books: cleanData })
        })
    }

    handleSearch = (event) => {
        this.setState({ searchField: event.target.value})
    }

    handleSort = (event) => {
      this.setState({ sort: event.target.value })
    }

    cleanData = (data) => {
      const cleanedData = data.body.items.map((book) => {
        if (book.volumeInfo.hasOwnProperty('publishedDate') === false) {
          book.volumeInfo['publishedDate'] = '0000';
        }
        else if (book.volumeInfo.hasOwnProperty('imageLinks') === false) {
          book.volumeInfo['imageLinks'] = { thumbnail: 'https://www.nextlevelfairs.com/assets/images/image-not-available.png' };
        }
        return book;
      })
      return cleanedData;
    }

  render() {
    return (
      <div>
          <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} handleSort={this.handleSort}/>
          <BookList books={this.state.books}/>
      </div>
    );
  }
}

export default Books;