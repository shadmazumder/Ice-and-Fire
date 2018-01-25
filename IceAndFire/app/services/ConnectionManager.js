import React from 'react';
import {create} from 'apisauce';
export default class ConnectionManager {
  static myInstance = null;

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

  static shareInstance () {
    if (this.myInstance == null) {
      this.myInstance = new ConnectionManager ();
    }
    return this.myInstance;
  }

  getCharacters () {
    this.api.get ('books').then (response => {
      console.log (response);
    });
    // fetch (this.booksUrl, {
    //   // mode: 'cors',
    //   method: 'get',
    //   headers: {
    //     'Access-Control-Allow-Origin': '*/*',
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //     Authorization: 'Token token=xxxxx',
    //     // 'Access-Control-Allow-Origin': '*',
    //   },
    // })
    //   .then (response => {
    //     console.log (response);
    //   })
    //   .catch (error => {
    //     console.error (error);
    //   });
  }

  getBooks () {}
}
