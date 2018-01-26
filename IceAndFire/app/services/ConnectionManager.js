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

  getCharacters () {
    this.api
      .get ('characters')
      .then (response => response.data)
      .then (responseData => {
        // we can return characters from it.
        this.allCharcters = responseData;
        console.log (this.allCharcters);
      })
      .catch (error => {
        // here load from json file
        console.error (error);
      });
  }

  getBooks () {}
}
