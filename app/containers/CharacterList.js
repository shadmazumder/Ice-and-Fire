import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';

import ContainerList from "../components/ListComponent";
import CharacterListItem from '../components/CharacterListItem';

import { setCharacter } from '../actions/index';

class CharacterList extends React.Component {
    state = {
        headerTextAlign: 'left',
        headerTextDecoration: 'none',
        headerTextFontSize: 20
    };

    renderListItem = item => {
        return <CharacterListItem item={item} onPress={this.itemOnPress} />;
    };

    itemOnPress = (item) => {
        this.props.navigation.navigate('CharacterDetails', item);
        this.props.setCharacter(item);
    }

    render() {
        if (this.props.characters.length == 0) {
            return (
                <Spinner
                    visible={true}
                    textContent={"Loading..."}
                    textStyle={{ color: '#FFF' }}
                />
            )
        }

        return (
            <ContainerList
                containerStyle={styles.container}
                headerStyle={[
                    styles.header,
                    { textAlign: this.state.headerTextAlign },
                    { textDecorationLine: this.state.headerTextDecoration },
                    { fontSize: this.state.headerTextFontSize },
                ]}
                headerText={this.props.headline}
                items={this.props.characters}
                listItem={this.renderListItem}
            />
        );
    }
}

function mapToStateProps(state) {
    return {
        characters: state.characters
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setCharacter: setCharacter
    }, dispatch);
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
    }
});

export default connect(mapToStateProps, mapDispatchToProps)(CharacterList);