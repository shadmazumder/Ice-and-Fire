import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import DetailComponent from '../components/DetailComponent';
import { getCharacterList, getCharacter } from '../actions';

import CharacterList from './CharacterList';

class CharacterDetails extends Component {
    _deleteUnnecessaryData(character) {
        delete character.allegiances;
        delete character.books;
        delete character.povBooks;
        delete character.spouse;
        delete character.born;
        delete character.culture;
        delete character.tvSeries;
        return character
    }
    processCharacterData() {
        let character = this.props.character;

        return this._deleteUnnecessaryData(character);
    }
    render() {
        let processedCharacter = this.processCharacterData();
        return (
            <View style={styles.container}>
                <DetailComponent
                    title={processedCharacter.name}
                    values={processedCharacter}
                />
            </View>
        );
    }
}

function mapToStateProps(state) {
    return {
        character: state.book_character
    }
}


const styles = StyleSheet.create({
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

export default connect(mapToStateProps, null)(CharacterDetails);
