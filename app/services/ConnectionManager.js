import React, {Component} from 'react';
import {create} from 'apisauce';
export default class ConnectionManager {

  // Setting this flag to false will set the data to be loaded from Json.
  // Currently static data from json is supported for the following screens:
  // "House screen", "House Details" and "Book screen"
  static isInternetConnected = true;

  api = create ({
    baseURL: 'https://www.anapioficeandfire.com/api/',
    headers: {
      Accept: 'application/vnd.anapioficeandfire+json',
      version: 1,
    },
  });

  updateItems = items => {};

  //get all characters
  getCharacters () {
    this.api
      .get ('characters')
      // .then (response => response.data)
      .then (responseCharacters => {
        this.updateItems (responseCharacters);
      })
      .catch (error => {
        // here load from json file
        console.error (error);
      });
  }

  // get all books
  getAllBooks () {
    return this.api.get ('books');
  }

  //get all houses
  getAllHouses () {
    return this.api.get ('houses');
  }
  //get single characters details
  getCharacterDetailsWith (characterUrl) {
    newApi = create ({
      baseURL: `${characterUrl}`,
      headers: {
        Accept: 'application/vnd.anapioficeandfire+json',
        version: 1,
      },
    });
    return newApi.get ();
  }

  //get single book details
  getBookDetailsWith (bookUrl) {
    this.api
      .get (`${bookUrl}`)
      .then (response => response.data)
      .then (bookDetails => {
        console.log (bookDetails);

        return bookDetails;
      })
      .catch (error => {
        console.error (error);
      });
  }

  //get single house details
  getHouseDetailsWith (houseUrl) {
    this.api
      .get (`${houseUrl}`)
      .then (response => response.data)
      .then (houseDetails => {
        console.log (houseDetails);
        return houseDetails;
      })
      .catch (error => {
        console.error (error);
      });
  }
}
