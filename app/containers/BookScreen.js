import React, {Component} from 'react';
import {StyleSheet, Alert} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';

import ContainerList from '../components/ListComponent';
import BasicListItem from '../components/BasicListItem';

import {getAllBooks, setBook} from '../actions/index';
import ConnectionManager from '../services/ConnectionManager';

class BookScreen extends React.Component {
  state = {
    headerTextAlign: 'center',
    headerText: 'The Books',
    headerTextDecoration: 'none',
    headerTextFontSize: 20,
  };

  renderListItem = item => {
    return <BasicListItem item={item} onPress={this.itemOnPress} />;
  };

  itemOnPress = item => {
    if (ConnectionManager.isInternetConnected) {
      this.props.setBook (item);
      this.props.navigation.navigate ('BookDetails', item);

      console.log ('has internet');
    } else {
      Alert.alert (
        'No Internet',
        'Please check your internet connection',
        [{text: 'OK', onPress: () => {}}],
        {cancelable: false}
      );
      console.log ('no internet');
    }
  };

  componentDidMount () {
    this.props.getAllBooks ();
  }

  render () {
    if (this.props.books && this.props.books.length == 0) {
      return (
        <Spinner
          visible={true}
          textContent={'Loading...'}
          textStyle={{color: '#FFF'}}
        />
      );
    }

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
        items={this.props.books}
        listItem={this.renderListItem}
      />
    );
  }
}

function mapToStateProps (state) {
  return {
    books: state.books,
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators (
    {
      getAllBooks: getAllBooks,
      setBook: setBook,
    },
    dispatch
  );
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

export default connect (mapToStateProps, mapDispatchToProps) (BookScreen);
