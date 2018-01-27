import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import ContainerList from './ListComponent';
import BasicListItem from './BasicListItem';
import ConnectionManager from '../services/ConnectionManager';
// import AvatarListItem from './AvatarListItem'

export default class Main extends Component {
  state = {
    items: ['Item 1', 'Item 2', 'Item 3'],

    headerTextAlign: 'center', //`left`,
    headerText: 'Header Goes here',
    headerTextDecoration: 'none', //'underline',
    headerTextFontSize: 18, //20
  };

  renderListItem = item => {
    return <BasicListItem item={item} />;

    // return(
    //     <AvatarListItem item = {item}/>
    // )
  };

  componentDidMount () {
    let connectionManger = new ConnectionManager ();
    connectionManger.getAllHouses ();
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
