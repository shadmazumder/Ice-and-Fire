import React, {Component} from 'react';
import {create} from 'apisauce';
export default class ConnectionManager extends Component {
  static myInstance = null;
  static shareInstance () {
    if (this.myInstance == null) {
      this.myInstance = new ConnectionManager ();
    }
    return this.myInstance;
  }

  api = create ({
    baseURL: 'https://www.anapioficeandfire.com/api/',
    headers: {
      // 'Access-Control-Allow-Origin': '*/*',
      Accept: 'application/vnd.anapioficeandfire+json',
      version: 1,
      // 'Content-Type': 'application/json',
    },
  });

  booksUrl = 'https://www.anapioficeandfire.com/api/books';
  charactersUrl = 'https://www.anapioficeandfire.com/api/characters';
  housesUrl = 'https://www.anapioficeandfire.com/api/houses';

  state = {
    allCharacters: [],
    allHouses: [],
    allBooks: [],
    isLoading: false,
  };

  getCharacters () {
    this.api
      .get ('characters')
      .then (response => response.data)
      .then (responseData => {
        this.setState ({
          allCharacters: [],
        });
        console.log (responseData);
        // return responseJson.movies;
      })
      .catch (error => {
        console.error (error);
      });
  }

  getBooks () {}
}
