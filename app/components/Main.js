import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import BaseNavigator from '.././Navigation'
import ContainerList from './ListComponent';
import BasicListItem from './BasicListItem';
import ConnectionManager from '../services/ConnectionManager';
import AvatarListItem from './AvatarListItem';

// import { StackNavigator, TabNavigator } from 'react-navigation';
// import HouseScreen from './HouseScreen'
// import BookScreen from './BookScreen'

export default class Main extends Component {
  state = {
    items: [],

    headerTextAlign: 'center', //`left`,
    headerText: 'Header Goes here',
    headerTextDecoration: 'none', //'underline',
    headerTextFontSize: 18, //20
  };

  updateItems = items => {
    this.setState ({items: items});
  };

  renderListItem = item => {
    return <BasicListItem item={item} />;

    // return <AvatarListItem item={item} />;
  };

  componentDidMount () {
    let connectionManger = new ConnectionManager ();

    // connectionManger.updateHouses = this.updateItems;
    // connectionManger.getAllHouses ();

    connectionManger.updateBooks = this.updateItems;
    connectionManger.getAllBooks ();

    // connectionManger.updateCharaters = this.updateItems;
    // connectionManger.getCharacters ();
  }
  render () {

    return < BaseNavigator />


    // return (
    //   <ContainerList
    //     containerStyle={styles.container}
    //     headerStyle={[
    //       styles.header,
    //       {textAlign: this.state.headerTextAlign},
    //       {textDecorationLine: this.state.headerTextDecoration},
    //       {fontSize: this.state.headerTextFontSize},
    //     ]}
    //     headerText={this.state.headerText}
    //     items={this.state.items}
    //     listItem={this.renderListItem}
    //   />
    // );
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

// const MainScreenNavigator = TabNavigator({
//   House: { screen: HouseScreen },
//   Book: { screen: BookScreen },
// });

// const RootNavigator = StackNavigator({
//   Main: {
//       screen: MainScreenNavigator,
//   },
// });
