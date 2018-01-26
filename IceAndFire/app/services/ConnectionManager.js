import React, {Component} from 'react';
import {create} from 'apisauce';
export default class ConnectionManager {
  /* static myInstance = null;
  static shareInstance () {
    if (this.myInstance == null) {
      this.myInstance = new ConnectionManager ();
    }
    return this.myInstance;

    // this is not mounted component, so it shows error if we want to set state of unmounted component
    state = {
    allCharacters: [],
    allHouses: [],
    allBooks: [],
    isLoading: false,
  };

  }*/

  allCharcters = [];
  allHouses = [];
  allBooks = [];
  api = create ({
    baseURL: 'https://www.anapioficeandfire.com/api/',
    headers: {
      Accept: 'application/vnd.anapioficeandfire+json',
      version: 1,
    },
  });

  //get all characters
  getCharacters () {
    this.api
      .get ('characters')
      .then (response => response.data)
      .then (responseCharacters => {
        // we can return characters from it.
        this.allCharcters = responseCharacters;
        console.log (this.allCharcters);
      })
      .catch (error => {
        // here load from json file
        console.error (error);
      });
  }

  // get all books
  getAllBooks () {
    this.api
      .get ('books')
      .then (response => response.data)
      .then (responseBooks => {
        // we can return characters from it.
        this.allBooks = responseBooks;
        console.log (this.allBooks);
      })
      .catch (error => {
        // here load from json file
        console.error (error);
      });
  }

  //get all houses
  getAllHouses () {
    this.api
      .get ('houses')
      .then (response => response.data)
      .then (responseHouses => {
        console.log (responseHouses);
        this.allHouses = responseHouses;
      })
      .catch (error => {
        // here load from json file
        console.error (error);
      });
  }
  //get single charcters details
  getCharacterDetailsWith (characterId) {
    this.api
      .get (`characters/${characterId}`)
      .then (response => response.data)
      .then (charcterDetails => {
        console.log (charcterDetails);
        return charcterDetails;
      })
      .catch (error => {
        console.error (error);
      });
  }

  //get single book details
  getBookDetailsWith (bookId) {
    this.api
      .get (`books/${bookId}`)
      .then (response => response.data)
      .then (bookDetails => {
        return bookDetails;
      })
      .catch (error => {
        console.error (error);
      });
  }

  //get single house details
  getHouseDetailsWith (houseId) {
    this.api
      .get (`houses/${houseId}`)
      .then (response => response.data)
      .then (houseDetails => {
        return houseDetails;
      })
      .catch (error => {
        console.error (error);
      });
  }
}
