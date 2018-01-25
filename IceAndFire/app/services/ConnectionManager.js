import React from 'react';

export default class ConnectionManager {
  //properties
  booksUrl = 'https://www.anapioficeandfire.com/api/books';
  charactersUrl = 'https://www.anapioficeandfire.com/api/characters';
  housesUrl = 'https://www.anapioficeandfire.com/api/houses';

  //singletone instance
  static myInstance = null;

  //state
  state = {
    allCharacters: [],
    allHouses: [],
    allBooks: [],
    isLoading: false,
  };

  sharedInstacne () {
    if (this.myInstance == null) {
      myInstance = new ConnectionManager ();
    }
    return myInstance;
  }

  // get books from remote
  getBooks () {}

  //get characters from remote
  getCharacters () {}

  //get houses from remote
  getHouses () {}
}
