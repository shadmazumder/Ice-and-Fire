import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import ContainerList from './ListComponent';
import BasicListItem from './BasicListItem';
import ConnectionManager from '../services/ConnectionManager';
// import AvatarListItem from './AvatarListItem'

export default class Main extends Component {
  state = {
    items: [],

    headerTextAlign: 'center', //`left`,
    headerText: 'Header Goes here',
    headerTextDecoration: 'none', //'underline',
    headerTextFontSize: 18, //20

    //temporary state, before redux
    houses: [],
    characters: [],
    books: [],
  };

  updateItems = items => {
    this.setState ({items: items});
    console.log ('state books');

    console.log (this.state.items);
  };

  updateHouses = houses => {
    console.log (houses);
    this.setState ({houses: houses});
  };

  updateCharacters = characters => {
    console.log (characters);
    this.setState ({characters: characters});
  };

  updateBooks = books => {
    console.log (books);
    this.setState ({books: books});
  };
  renderListItem = item => {
    return <BasicListItem item={item} />;

    // return(
    //     <AvatarListItem item = {item}/>
    // )
  };

  componentDidMount () {
    let connectionManger = new ConnectionManager ();

    // connectionManger.updateHouses = this.updateHouses;
    // connectionManger.getAllHouses ();

    connectionManger.updateBooks = this.updateItems;
    connectionManger.getAllBooks ();

    // connectionManger.updateCharaters = this.updateCharacters;
    // connectionManger.getCharacters ();
  }
  render () {
    return (
      <ContainerList
        containerStyle={styles.container}
        headerStyle={[
          styles.header,
          {textAlign: this.state.headerTextAlign},
          {textDecorationLine: this.state.headerTextDecoration},
          {fontSize: this.state.headerTextFontSize},
        ]}
        headerText={this.state.headerText}
        items={this.state.items}
        listItem={this.renderListItem}
      />
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    marginTop: 20,
  },
  header: {
    flex: 0,
    marginTop: 8,
    fontWeight: 'bold',
  },
});
