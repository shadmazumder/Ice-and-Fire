import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DetailComponent from '../components/DetailComponent';
import { getBookCharacterList, resetBookCharacters } from '../actions';

import CharacterList from './BookCharacterList';

class HouseDetails extends Component {

  componentWillUnmount() {
    this.props.resetBookCharacters();
  }

  render() {
      this.props.getCharacterList(this.props.book.characters)
    return (
      <View style={styles.container}>
        <CharacterList
          navScreen = 'BookCharacter'
          navigation={this.props.navigation}
          headline = {"Characters"}
        />
      </View>
    );
  }
}

function mapToStateProps(state) {
  return {
    book: state.book
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCharacterList: getBookCharacterList,
    resetBookCharacters: resetBookCharacters,
  }, dispatch);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default connect(mapToStateProps, mapDispatchToProps)(HouseDetails);
