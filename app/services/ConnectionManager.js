import React, {Component} from 'react';
import {NetInfo} from 'react-native';
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

  // constructor (props) {
  //   // super (props);
  //   console.log (this.props.name);
  // }

  static isInternetConnected = false;
  constructor () {
    console.log (ConnectionManager.isInternetConnected);
    NetInfo.isConnected.addEventListener (
      'connectionChange',
      this.handleConnectivityChange
    );
  }

  handleConnectivityChange (isConnected) {
    ConnectionManager.isInternetConnected = isConnected;
    console.log ('Then, is ' + (isConnected ? 'online' : 'offline'));
    // NetInfo.isConnected.removeEventListener (
    //   'connectionChange',
    //   this.handleFirstConnectivityChange
    // );
  }

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
