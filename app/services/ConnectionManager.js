import React, { Component } from 'react';
import { create } from 'apisauce';
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

  // constructor (props) {
  //   // super (props);
  //   console.log (this.props.name);
  // }

  api = create({
    baseURL: 'https://www.anapioficeandfire.com/api/',
    headers: {
      Accept: 'application/vnd.anapioficeandfire+json',
      version: 1,
    },
  });

  updateItems = items => { };

  //get all characters
  getCharacters() {
    this.api
      .get('characters')
      // .then (response => response.data)
      .then(responseCharacters => {
        this.updateItems(responseCharacters);
      })
      .catch(error => {
        // here load from json file
        console.error(error);
      });
  }

  // get all books
  getAllBooks() {
    return this.api
      .get('books')

  }

  //get all houses
  getAllHouses() {
    return this.api
      .get('houses')
  }
  //get single charcters details
  getCharacterDetailsWith(characterUrl) {
    return this.api
      .get(`${characterUrl}`);
  }

  //get single book details
  getBookDetailsWith(bookUrl) {
    this.api
      .get(`${bookUrl}`)
      .then(response => response.data)
      .then(bookDetails => {
        console.log(bookDetails);

        return bookDetails;
      })
      .catch(error => {
        console.error(error);
      });
  }

  //get single house details
  getHouseDetailsWith(houseUrl) {
    this.api
      .get(`${houseUrl}`)
      .then(response => response.data)
      .then(houseDetails => {
        console.log(houseDetails);
        return houseDetails;
      })
      .catch(error => {
        console.error(error);
      });
  }
}
